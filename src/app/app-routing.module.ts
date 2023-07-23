import { BannerComponent } from "./banner/banner.component";
import { CategoriesComponent } from "./categories/categories.component";
import { AboutComponent } from "./about/about.component";
import { CategoryComponent } from "./categories/category/category.component";
import { MoviesComponent } from "./movies/movies.component";

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: "", component: BannerComponent},
    {path: "categories", component: CategoriesComponent},
    {path: "about", component: AboutComponent},
    {path: "categories/movies", component: MoviesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
