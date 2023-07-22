import { Routes } from "@angular/router";
import { BannerComponent } from "./banner/banner.component";
import { CategoriesComponent } from "./categories/categories.component";
import { AboutComponent } from "./about/about.component";

export const ROUTES: Routes = [
    {path: "", component: BannerComponent},
    {path: "categories", component: CategoriesComponent},
    {path: "about", component: AboutComponent},
]