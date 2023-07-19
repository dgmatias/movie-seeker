import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {path: "", component: BannerComponent},
  {path: "about", component: AboutComponent},
  {path: "category", component: CategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
