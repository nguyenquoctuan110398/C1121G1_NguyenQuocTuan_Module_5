import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListCustomerComponent} from "./component/customer/list-customer/list-customer.component";
import {ListServiceComponent} from "./component/services/list-service/list-service.component";
import {CreateCustomerComponent} from "./component/customer/create-customer/create-customer.component";
import {EditCustomerComponent} from "./component/customer/edit-customer/edit-customer.component";
import {CreateServiceComponent} from "./component/services/create-service/create-service.component";
import {EditServiceComponent} from "./component/services/edit-service/edit-service.component";
import {CustomerModule} from "./component/customer/customer.module";
import {ServicesModule} from "./component/services/services.module";

const routes: Routes = [
  // {
  //   path: 'customers/list',
  //   component: ListCustomerComponent
  // },
  // {
  //   path: 'customers/create',
  //   component: CreateCustomerComponent
  // },
  // {
  //   path: 'customers/edit/:customerId',
  //   component: EditCustomerComponent
  // },

  // {
  //   path: 'services/list',
  //   component: ListServiceComponent
  // },
  // {
  //   path: 'services/create',
  //   component: CreateServiceComponent
  // },
  // {
  //   path: 'services/edit/:id',
  //   component: EditServiceComponent
  // }
  // {
  //   path: 'services/edit/:serviceId',
  //
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
