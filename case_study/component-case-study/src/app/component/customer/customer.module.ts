import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerRoutingModule} from "./customer-routing.module";
import {ListCustomerComponent} from "./list-customer/list-customer.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {EditCustomerComponent} from "./edit-customer/edit-customer.component";
import {NgxPaginationModule} from "ngx-pagination";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListCustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
