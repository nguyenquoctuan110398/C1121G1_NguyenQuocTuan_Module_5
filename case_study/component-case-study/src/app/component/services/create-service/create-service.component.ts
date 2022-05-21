import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServicesService} from "../../../service/services/services.service";
import {RentTypeService} from "../../../service/services/rent-type.service";
import {Router} from "@angular/router";
import {ServiceTypeService} from "../../../service/services/service-type.service";
import {RentType} from "../services-model/rent-type";
import {ServiceType} from "../services-model/service-type";
@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {


  createServiceForm: FormGroup

  rentTypes: RentType[] = [];
  serviceTypes: ServiceType[] = [];
  serviceType: ServiceType = new ServiceType();

  constructor(private servicesService: ServicesService,
              private rentTypeService: RentTypeService,
              private serviceTypeService: ServiceTypeService,
              private router: Router) {

    this.createServiceForm = new FormGroup({
      serviceCode: new FormControl('', [Validators.required,
        Validators.pattern('^(DV)-\\d{4}$')]),
      serviceName: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z ]{2,}$')]),
      serviceArea: new FormControl('', [Validators.required,
        Validators.pattern('^[1-9]\\d{2,}$')]),
      serviceCost: new FormControl('', [Validators.required,
        Validators.pattern('^[1-9]\\d*(.?\\d+)?$')]),
      serviceMaxPeople: new FormControl('', [Validators.required,
        Validators.pattern('^[1-9]\\d*$')]),
      standardRoom: new FormControl('', [Validators.required]),
      descriptionOtherConvenience: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required,
        Validators.pattern('^[1-9]\\d*.\\d*$')]),
      numberOfFloors: new FormControl('', [Validators.required,
        Validators.pattern('^[1-9]\\d{0,1}$')]),
      serviceType: new FormControl('', [Validators.required]),
      rentType: new FormControl('', [Validators.required])
    })
  }

  compareFn(t1: ServiceType, t2: ServiceType): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }

  ngOnInit(): void {
    this.getAllRentType();
    this.getAllServiceType();
  }

  chooseServiceType(target: any) {
    console.log("hihi" + target.value);
    this.serviceTypeService.findById(target.value).subscribe(serviceType => {
      this.serviceType = serviceType;
      console.log(serviceType);

      this.createServiceForm.controls.serviceType.setValue(serviceType);

      if (this.serviceType.id != 1) {
        if (this.serviceType.id != 2) {

          this.createServiceForm.controls.standardRoom.clearValidators();
          this.createServiceForm.controls.standardRoom.updateValueAndValidity();

          this.createServiceForm.controls.descriptionOtherConvenience.clearValidators();
          this.createServiceForm.controls.descriptionOtherConvenience.updateValueAndValidity();

          this.createServiceForm.controls.numberOfFloors.clearValidators();
          this.createServiceForm.controls.numberOfFloors.updateValueAndValidity();

          this.createServiceForm.controls.poolArea.clearValidators();
          this.createServiceForm.controls.poolArea.updateValueAndValidity();

        } else {

          this.createServiceForm.controls.standardRoom.setValidators([Validators.required]);
          this.createServiceForm.controls.standardRoom.updateValueAndValidity();

          this.createServiceForm.controls.descriptionOtherConvenience.setValidators([Validators.required]);
          this.createServiceForm.controls.descriptionOtherConvenience.updateValueAndValidity();

          this.createServiceForm.controls.numberOfFloors.setValidators([Validators.required, Validators.pattern('^[1-9]\\d{0,1}$')]);
          this.createServiceForm.controls.numberOfFloors.updateValueAndValidity();

          this.createServiceForm.controls.poolArea.clearValidators();
          this.createServiceForm.controls.poolArea.updateValueAndValidity();

        }

      } else {

        this.createServiceForm.controls.standardRoom.setValidators([Validators.required]);
        this.createServiceForm.controls.standardRoom.updateValueAndValidity();

        this.createServiceForm.controls.descriptionOtherConvenience.setValidators([Validators.required]);
        this.createServiceForm.controls.descriptionOtherConvenience.updateValueAndValidity();

        this.createServiceForm.controls.numberOfFloors.setValidators([Validators.required, Validators.pattern('^[1-9]\\d{0,1}$')]);
        this.createServiceForm.controls.numberOfFloors.updateValueAndValidity();

        this.createServiceForm.controls.poolArea.setValidators([Validators.required,
          Validators.pattern('^[1-9]\\d*.\\d*$')]);
        this.createServiceForm.controls.poolArea.updateValueAndValidity();
      }
    })


    // if (this.serviceType.serviceTypeId == 1) {
    //   this.createServiceForm.value.serviceTypeName = 'Villa';
    // } else if (this.serviceType.serviceTypeId == 2) {
    //   this.createServiceForm.value.serviceTypeName = 'House';
    // } else if (this.serviceType.serviceTypeId == 3) {
    //   this.createServiceForm.value.serviceTypeName = 'Room';
    // }



  }

  onSubmit() {
    console.log(this.createServiceForm);
  }

  // checkValidation(){
  //   console.log(this.serviceType);
  //   console.log(this.createServiceForm.controls.standardRoom.errors)
  //
  // }

  // getServiceTypeName() {
  //   if (this.serviceTypeId == '1') {
  //     this.createServiceForm.value.serviceTypeName = 'Villa';
  //   } else if (this.serviceTypeId == '2') {
  //     this.createServiceForm.value.serviceTypeName = 'House';
  //   } else if (this.serviceTypeId == '3') {
  //     this.createServiceForm.value.serviceTypeName = 'Room';
  //   }
  // }

  //API json-server
  createService(successBtn: HTMLButtonElement) {
    console.log(this.createServiceForm);
    const service = this.createServiceForm.value;
    console.log(service);

    this.servicesService.saveServices(service).subscribe(() => {
      console.log("Create success");
      // this.router.navigate(['services/list']);
      successBtn.click();
    }, error => {
      alert("Chicken");
    })
  }

  getAllRentType() {
    this.rentTypeService.getAll().subscribe(rentTypes => {
      this.rentTypes = rentTypes;
    })
  }

  getAllServiceType() {
    this.serviceTypeService.getAll().subscribe(serviceTypes => {
      this.serviceTypes = serviceTypes;
    })
  }
}
