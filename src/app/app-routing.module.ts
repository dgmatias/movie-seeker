
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BannerComponent } from "./banner/banner.component";
import { CategoriesComponent } from "./categories/categories.component";
import { AboutComponent } from "./about/about.component";
import { FilmesComponent } from './filmes/filmes.component';

const routes: Routes = [
    {path: "", component: BannerComponent},
    {path: "categories", component: CategoriesComponent},
    {path: "about", component: AboutComponent},
    {path: "filmes", component: FilmesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
