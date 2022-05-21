import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ListServiceComponent} from "./list-service/list-service.component";
import {CreateServiceComponent} from "./create-service/create-service.component";
import {EditServiceComponent} from "./edit-service/edit-service.component";

const routes: Routes = [
  {
    path: 'services/list',
    component: ListServiceComponent
  },
  {
    path: 'services/create',
    component: CreateServiceComponent
  },
  {
    path: 'services/edit/:id',
    component: EditServiceComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ServicesRoutingModule {

}
