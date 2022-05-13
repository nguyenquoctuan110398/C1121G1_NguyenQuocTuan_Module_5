import { Component, OnInit } from '@angular/core';

import {ServiceDao} from "../../../dao/service/serviceDao";
import {CustomerDao} from "../../../dao/customer/customerDao";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {

  // customers = CustomerDao.customers;
  // services = ServiceDao.services;

  employees: Array<string> = ['Ngọc', 'Hậu', 'Chiến']
  customers: Array<string> = ['Tuấn', 'Khải', 'Hiếu']
  services: Array<string> = ['Villa 1', 'House 2', 'Room 3']

  createContractForm: FormGroup;

  constructor() {
    this.createContractForm = new FormGroup({
      // contractId: new FormControl('', [Validators.required])
      contractStartDate: new FormControl('', [Validators.required]),
      contractEndDate: new FormControl('', [Validators.required]),
      contractDeposit: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d{2,}$')]),
      employeeName: new FormControl(this.employees[0], [Validators.required]),
      customerName: new FormControl(this.customers[0], [Validators.required]),
      servicesName: new FormControl(this.services[0], [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.createContractForm);
  }

}
