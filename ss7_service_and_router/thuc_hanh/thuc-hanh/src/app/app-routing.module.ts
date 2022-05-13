import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimelinesComponent} from './angular-timelines-app/timelines/timelines.component';
import {YoutubePlaylistComponent} from './angular-playlist-app/youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './angular-playlist-app/youtube-player/youtube-player.component';
import {ProductListComponent} from './angular-product-management/product/product-list/product-list.component';
import {ProductCreateComponent} from './angular-product-management/product/product-create/product-create.component';
import {ProductEditComponent} from './angular-product-management/product/product-edit/product-edit.component';
import {ProductDeleteComponent} from './angular-product-management/product/product-delete/product-delete.component';


const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent
  },

  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },

  {
    path: 'product/list',
    component: ProductListComponent
  },
  {
    path: 'product/create',
    component: ProductCreateComponent
  },
  {
    path: 'product/edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'product/delete/:id',
    component: ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
