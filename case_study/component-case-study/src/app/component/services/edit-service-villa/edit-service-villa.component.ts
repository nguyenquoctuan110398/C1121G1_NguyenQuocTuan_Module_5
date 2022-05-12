import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-service-villa',
  templateUrl: './edit-service-villa.component.html',
  styleUrls: ['./edit-service-villa.component.css']
})
export class EditServiceVillaComponent implements OnInit {

  editServiceForm: FormGroup;

  constructor() {
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
      // serviceTypeName: new FormControl('', [Validators.required]),
      rentTypeName: new FormControl('day', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.editServiceForm);
  }
}
