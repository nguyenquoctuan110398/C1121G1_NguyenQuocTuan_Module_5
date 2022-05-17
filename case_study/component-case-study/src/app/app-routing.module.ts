import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListCustomerComponent} from "./component/customer/list-customer/list-customer.component";
import {ListServiceComponent} from "./component/services/list-service/list-service.component";
import {CreateCustomerComponent} from "./component/customer/create-customer/create-customer.component";
import {EditCustomerComponent} from "./component/customer/edit-customer/edit-customer.component";

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
  },

  {
    path: 'service/list',
    component: ListServiceComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
