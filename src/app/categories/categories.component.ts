import { Component } from '@angular/core';
import { Category } from '../models/category-model';

@Component({
  selector: 'mov-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  categories: Category[] = [

    {id: 1, nome: "ação", img: "assets/img/john-wick.jpg"},
    {id: 2, nome: "comédia", img: "assets/img/billi-pig.jpg"},
    {id: 3, nome: "terror", img: "assets/img/maligno.jpg"},
    {id: 4, nome: "infantil", img: "assets/img/era-do-gelo-4.jpg" },

  ]

}
