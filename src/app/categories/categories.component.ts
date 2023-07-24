import { Component } from '@angular/core';
import { Category } from '../models/category-model';

@Component({
  selector: 'mov-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  categories: Category[] = [

    {nome: "ação", img: "assets/img/john-wick.jpg"},
    {nome: "comédia", img: "assets/img/billi-pig.jpg"},
    {nome: "terror", img: "assets/img/maligno.jpg"},
    {nome: "infantil", img: "assets/img/era-do-gelo-4.jpg" }

  ]

}
