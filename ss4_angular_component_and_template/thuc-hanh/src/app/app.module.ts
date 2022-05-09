import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HackernewsAppComponent } from './hackernews-app/hackernews-app.component';
import { ArticleComponent } from './hackernews-app/article/article.component';
import {FormsModule} from '@angular/forms';
import { LikeComponent } from './hackernews-app/like/like.component';
import { NavbarComponent } from './hackernews-app/navbar/navbar.component';
import { FooterComponent } from './hackernews-app/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HackernewsAppComponent,
    ArticleComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
