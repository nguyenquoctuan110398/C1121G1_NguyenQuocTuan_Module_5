import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { ThemBaiDangComponent } from './them-bai-dang/them-bai-dang.component';
import { DanhSachBaiDangComponent } from './danh-sach-bai-dang/danh-sach-bai-dang.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SuaBaiDangComponent } from './sua-bai-dang/sua-bai-dang.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemBaiDangComponent,
    DanhSachBaiDangComponent,
    SuaBaiDangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
