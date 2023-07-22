import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './categories/category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    BannerComponent,
    CategoriesComponent,
    CategoryComponent,
    MoviesComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
