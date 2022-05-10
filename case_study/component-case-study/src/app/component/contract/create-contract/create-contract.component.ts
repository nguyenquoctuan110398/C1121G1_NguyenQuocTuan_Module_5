import { Component, OnInit } from '@angular/core';

import {ServiceDao} from "../../../dao/service/serviceDao";
import {CustomerDao} from "../../../dao/customer/customerDao";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {

  customers = CustomerDao.customers;
  services = ServiceDao.services;

  constructor() { }

  ngOnInit(): void {
  }

}
