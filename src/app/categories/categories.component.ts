import { Component } from '@angular/core';

@Component({
  selector: 'mov-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  categories = [
    {nome: "ação", img: "assets/img/john-wick.jpg"},
    {nome: "comédia", img: "assets/img/billi-pig.jpg"},
    {nome: "terror", img: "assets/img/maligno.jpg"},

  ]

}
