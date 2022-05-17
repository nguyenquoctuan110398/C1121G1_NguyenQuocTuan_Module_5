import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer/customer";

import {Router} from "@angular/router";
import {CustomerService} from "../../../service/customer/customer.service";


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: Customer[] = [];
  customerNameDelete: string;
  customerDelete: Customer = {};

  constructor(private customerService: CustomerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getCustomerDelete(customer: Customer){
    this.customerDelete = customer;
  }

  deleteCustomer(closeModal: HTMLButtonElement) {
    this.customerService.deleteCustomer(this.customerDelete.customerId);
    console.log(this.customerService.customers);

    this.router.navigate(['/customers/list']);
    closeModal.click();
  }

  // getAll() {
  //   this.customers = this.customerService.customers;
  // }

  //Api service
  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
      console.log(this.customers);
    });
  }

}
