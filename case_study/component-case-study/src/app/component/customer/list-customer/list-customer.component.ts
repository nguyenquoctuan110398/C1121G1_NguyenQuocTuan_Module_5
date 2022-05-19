import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer/customer";

import {ActivatedRoute, ParamMap, Router} from "@angular/router";
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

  id: number;

  p = 1;
  name: string;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomerDelete(this.id);
    })
  }

  ngOnInit(): void {
    this.getAll();
  }

  // getCustomerDelete(customer: Customer){
  //   this.customerDelete = customer;
  // }

  // deleteCustomer(closeModal: HTMLButtonElement) {
  //   this.customerService.deleteCustomer(this.customerDelete.customerId);
  //   console.log(this.customerService.customers);
  //
  //   this.router.navigate(['/customers/list']);
  //   closeModal.click();
  // }

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

  getCustomerDelete(id: number) {
    return this.customerService.findById(id).subscribe(customerDelete => {
      this.customerDelete = customerDelete;
    })
  }

  deleteCustomer(closeModal: HTMLButtonElement) {
    this.customerService.deleteCustomer(this.customerDelete.customerId, this.customerDelete).subscribe(() => {
      alert("Delete success");
      closeModal.click();
      this.ngOnInit();
    }, error => {
      console.log(error);
    })
  }



}
