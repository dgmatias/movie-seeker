

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './categories/category/category.component';
import { AboutComponent } from './about/about.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MoviesComponent } from './movies/movies.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    CategoriesComponent,
    CategoryComponent,
    MoviesComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
