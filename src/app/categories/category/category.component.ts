import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/category-model';

@Component({
  selector: 'mov-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  @Input() nome!: string;
  @Input() img!: string;

}
