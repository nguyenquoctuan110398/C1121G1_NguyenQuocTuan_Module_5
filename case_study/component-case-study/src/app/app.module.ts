import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from "./component/layout/navbar/navbar.component";
import {HeaderComponent} from "./component/layout/header/header.component";
import {CreateServiceComponent} from "./component/services/create-service/create-service.component";
import {ListCustomerComponent} from "./component/customer/list-customer/list-customer.component";
import {CreateCustomerComponent} from "./component/customer/create-customer/create-customer.component";
import {EditCustomerComponent} from "./component/customer/edit-customer/edit-customer.component";
import {CreateContractComponent} from "./component/contract/create-contract/create-contract.component";
import {ListContractComponent} from "./component/contract/list-contract/list-contract.component";
import {FooterComponent} from "./component/layout/footer/footer.component";
import { EditServiceVillaComponent } from './component/services/edit-service-villa/edit-service-villa.component';
import { EditServiceHouseComponent } from './component/services/edit-service-house/edit-service-house.component';
import { EditServiceRoomComponent } from './component/services/edit-service-room/edit-service-room.component';
import { EditServiceComponent } from './component/services/edit-service/edit-service.component';
import { ListServiceComponent } from './component/services/list-service/list-service.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CreateServiceComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    CreateContractComponent,
    ListContractComponent,
    FooterComponent,
    EditServiceVillaComponent,
    EditServiceHouseComponent,
    EditServiceRoomComponent,
    EditServiceComponent,
    ListServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
