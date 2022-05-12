import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {

  serviceType: string;

  createServiceForm: FormGroup

  constructor() {
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
      // serviceTypeName: new FormControl('', [Validators.required]),
      rentTypeName: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  chooseServiceType(target: any) {
    this.serviceType = target.value;

    if (this.serviceType != '1') {
      if (this.serviceType != '2') {

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

    if (this.serviceType == '1') {
      this.createServiceForm.value.serviceTypeName = 'Villa';
    } else if (this.serviceType == '2') {
      this.createServiceForm.value.serviceTypeName = 'House';
    } else if (this.serviceType == '3') {
      this.createServiceForm.value.serviceTypeName = 'Room';
    }



  }

  onSubmit() {
    console.log(this.createServiceForm);
  }

  // checkValidation(){
  //   console.log(this.serviceType);
  //   console.log(this.createServiceForm.controls.standardRoom.errors)
  //
  // }

  getServiceTypeName() {
    if (this.serviceType == '1') {
      this.createServiceForm.value.serviceTypeName = 'Villa';
    } else if (this.serviceType == '2') {
      this.createServiceForm.value.serviceTypeName = 'House';
    } else if (this.serviceType == '3') {
      this.createServiceForm.value.serviceTypeName = 'Room';
    }
  }
}
