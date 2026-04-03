import { Component, Input } from '@angular/core';
import { Category } from '../../models/home-data.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  @Input() categories: Category[] = [];
}
