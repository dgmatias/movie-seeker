import { Component } from '@angular/core';
import { Category } from '../models/category-model';
import { CategoriesServices } from './categories.service';

@Component({
  selector: 'mov-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  categories: Category[] = []

  constructor(private service: CategoriesServices) {}

  ngOnInit() {
    this.service.listCategories().subscribe(categories => this.categories = categories);
  }
}
