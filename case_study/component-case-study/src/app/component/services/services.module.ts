import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServicesRoutingModule} from "./services-routing.module";
import {ListServiceComponent} from "./list-service/list-service.component";
import {CreateServiceComponent} from "./create-service/create-service.component";
import {EditServiceComponent} from "./edit-service/edit-service.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";



@NgModule({
  declarations: [
    ListServiceComponent,
    CreateServiceComponent,
    EditServiceComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class ServicesModule { }
