import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


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
