import { BannerComponent } from "./banner/banner.component";
import { CategoriesComponent } from "./categories/categories.component";
import { AboutComponent } from "./about/about.component";
import { MoviesComponent } from "./movies/movies.component";

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestesComponent } from "./testes/testes.component";

const routes: Routes = [
    {path: "", component: BannerComponent},
    {path: "categories", component: CategoriesComponent},
    {path: "about", component: AboutComponent},
    {path: "movies", component: MoviesComponent},
    {path: "testes", component: TestesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
