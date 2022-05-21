import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Services} from "../../../model/services/services";
import {ServiceType} from "../../../model/services/service-type";
import {RentType} from "../../../model/services/rent-type";
import {ServicesService} from "../../../service/services/services.service";
import {ServiceTypeService} from "../../../service/services/service-type.service";
import {RentTypeService} from "../../../service/services/rent-type.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {log} from "util";

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

  editServiceForm: FormGroup;

  id: number;
  service: Services;
  serviceTypes: ServiceType[];
  rentTypes: RentType[];

  constructor(private servicesService: ServicesService,
              private serviceTypeService: ServiceTypeService,
              private rentTypeService: RentTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getService(this.id);
    })

    this.editServiceForm = new FormGroup({
      serviceCode: new FormControl('DV-0001', [Validators.required,
        Validators.pattern('^(DV)-\\d{4}$')]),
      serviceName: new FormControl('Villa Beach Front', [Validators.required,
        Validators.pattern('^[a-zA-Z ]{2,}$')]),
      serviceArea: new FormControl('25000', [Validators.required,
        Validators.pattern('^[1-9]\\d{2,}$')]),
      serviceCost: new FormControl('10000000', [Validators.required,
        Validators.pattern('^[1-9]\\d*(.?\\d+)?$')]),
      serviceMaxPeople: new FormControl('10', [Validators.required,
        Validators.pattern('^[1-9]\\d*$')]),
      standardRoom: new FormControl('vip', [Validators.required]),
      descriptionOtherConvenience: new FormControl('Có hồ bơi', [Validators.required]),
      poolArea: new FormControl('500', [Validators.required,
        Validators.pattern('^[1-9]\\d*.\\d*$')]),
      numberOfFloors: new FormControl('4', [Validators.required,
        Validators.pattern('^[1-9]\\d{0,1}$')]),
      serviceType: new FormControl('', [Validators.required]),
      rentType: new FormControl('day', [Validators.required])
    })


  }

  ngOnInit(): void {
    this.serviceTypeService.getAll().subscribe(serviceTypes => {
      this.serviceTypes = serviceTypes;
    })

    this.rentTypeService.getAll().subscribe(rentTypes => {
      this.rentTypes = rentTypes;
    })
  }

  compareFnServiceType(t1: ServiceType, t2: ServiceType): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }

  compareFnRentType(t1: RentType, t2: RentType): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }

  //Api
  getService(id: number) {
    return this.servicesService.findById(id).subscribe(service => {
      console.log(service);
      this.service = service;
      console.log(this.editServiceForm)
      this.editServiceForm.patchValue(this.service);

      if (this.service.serviceType.id != 1) {
        if (this.service.serviceType.id != 2) {

          this.editServiceForm.controls.standardRoom.clearValidators();
          this.editServiceForm.controls.standardRoom.updateValueAndValidity();

          this.editServiceForm.controls.descriptionOtherConvenience.clearValidators();
          this.editServiceForm.controls.descriptionOtherConvenience.updateValueAndValidity();

          this.editServiceForm.controls.numberOfFloors.clearValidators();
          this.editServiceForm.controls.numberOfFloors.updateValueAndValidity();

          this.editServiceForm.controls.poolArea.clearValidators();
          this.editServiceForm.controls.poolArea.updateValueAndValidity();

        } else {

          this.editServiceForm.controls.standardRoom.setValidators([Validators.required]);
          this.editServiceForm.controls.standardRoom.updateValueAndValidity();

          this.editServiceForm.controls.descriptionOtherConvenience.setValidators([Validators.required]);
          this.editServiceForm.controls.descriptionOtherConvenience.updateValueAndValidity();

          this.editServiceForm.controls.numberOfFloors.setValidators([Validators.required, Validators.pattern('^[1-9]\\d{0,1}$')]);
          this.editServiceForm.controls.numberOfFloors.updateValueAndValidity();

          this.editServiceForm.controls.poolArea.clearValidators();
          this.editServiceForm.controls.poolArea.updateValueAndValidity();

        }

      } else {

        this.editServiceForm.controls.standardRoom.setValidators([Validators.required]);
        this.editServiceForm.controls.standardRoom.updateValueAndValidity();

        this.editServiceForm.controls.descriptionOtherConvenience.setValidators([Validators.required]);
        this.editServiceForm.controls.descriptionOtherConvenience.updateValueAndValidity();

        this.editServiceForm.controls.numberOfFloors.setValidators([Validators.required, Validators.pattern('^[1-9]\\d{0,1}$')]);
        this.editServiceForm.controls.numberOfFloors.updateValueAndValidity();

        this.editServiceForm.controls.poolArea.setValidators([Validators.required,
          Validators.pattern('^[1-9]\\d*.\\d*$')]);
        this.editServiceForm.controls.poolArea.updateValueAndValidity();
      }
    })
  }

  updateService(successBtn: HTMLButtonElement) {
    console.log(this.editServiceForm);
    const service = this.editServiceForm.value;
    console.log('id: ' + this.id);

    this.servicesService.updateServices(this.id, service).subscribe(() => {
      console.log("edit success");
      successBtn.click();
      // this.router.navigate(['/services/list'])

    }, error => {
      console.log(error);
    })
  }
}
