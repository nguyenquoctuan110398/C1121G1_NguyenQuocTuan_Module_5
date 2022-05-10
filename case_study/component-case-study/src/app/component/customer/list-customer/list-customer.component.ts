import { Component, OnInit } from '@angular/core';
import {CustomerDao} from "../../../dao/customer/customerDao";


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers = CustomerDao.customers;
  customerNameDelete: string;

  constructor() { }

  ngOnInit(): void {
  }

  deleteCustomer(nameDelete: string){
    this.customerNameDelete = nameDelete;
  }

}
