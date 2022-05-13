import { Component, OnInit } from '@angular/core';
import {CustomerDao} from "../../../dao/customer/customerDao";
import {Customer} from "../../../model/customer/customer";
import {CustomerService} from "../../../service/customer.service";


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: Customer[] = [];
  customerNameDelete: string;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAll();
  }

  deleteCustomer(nameDelete: string){
    this.customerNameDelete = nameDelete;
  }

  getAll(){
    this.customers = this.customerService.customers;
  }

}
