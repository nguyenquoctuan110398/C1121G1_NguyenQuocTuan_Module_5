import {RouterModule, Routes} from "@angular/router";
import {ListCustomerComponent} from "./list-customer/list-customer.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {EditCustomerComponent} from "./edit-customer/edit-customer.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'customers/list',
    component: ListCustomerComponent
  },
  {
    path: 'customers/create',
    component: CreateCustomerComponent
  },
  {
    path: 'customers/edit/:customerId',
    component: EditCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CustomerRoutingModule {

}
