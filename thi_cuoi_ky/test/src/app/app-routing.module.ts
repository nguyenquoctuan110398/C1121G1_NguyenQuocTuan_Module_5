import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DanhSachBaiDangComponent} from './danh-sach-bai-dang/danh-sach-bai-dang.component';
import {ThemBaiDangComponent} from './them-bai-dang/them-bai-dang.component';


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
  //
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
  {
    path: '',
    component: DanhSachBaiDangComponent
  },
  {
    path: 'them-moi',
    component: ThemBaiDangComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
