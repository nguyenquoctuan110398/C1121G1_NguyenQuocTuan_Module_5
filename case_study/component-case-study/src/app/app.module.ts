import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateContractComponent} from "./component/contract/create-contract/create-contract.component";
import {ListContractComponent} from "./component/contract/list-contract/list-contract.component";
import {HttpClientModule} from "@angular/common/http";
import {CustomerModule} from "./component/customer/customer.module";
import {ServicesModule} from "./component/services/services.module";
import {HeaderComponent} from "./component/layout/header/header.component";
import {NavbarComponent} from "./component/layout/navbar/navbar.component";
import {FooterComponent} from "./component/layout/footer/footer.component";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,

    // ListCustomerComponent,
    // CreateCustomerComponent,
    // EditCustomerComponent,
    CreateContractComponent,
    ListContractComponent,
    // CreateServiceComponent,
    // EditServiceComponent,
    // ListServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomerModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
