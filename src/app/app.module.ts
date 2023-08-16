

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './categories/category/category.component';
import { AboutComponent } from './about/about.component';
import { FilmesComponent } from './filmes/filmes.component';
import { FilmeComponent } from './filmes/filme/filme.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesServices } from './categories/categories.service';
import { FilmesService } from './filmes/filmes-service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    CategoriesComponent,
    CategoryComponent,
    FilmesComponent,
    FilmeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CategoriesServices, FilmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
