import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TimelinesComponent} from './angular-timelines-app/timelines/timelines.component';
import {YoutubePlaylistComponent} from './angular-playlist-app/youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './angular-playlist-app/youtube-player/youtube-player.component';
import {ProductListComponent} from './angular-product-management/product/product-list/product-list.component';
import {ProductCreateComponent} from './angular-product-management/product/product-create/product-create.component';
import {ProductEditComponent} from './angular-product-management/product/product-edit/product-edit.component';
import {ProductDeleteComponent} from './angular-product-management/product/product-delete/product-delete.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductService} from "./angular-product-management/service/product.service";


@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
