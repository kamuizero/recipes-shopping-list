import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Donut de Chocolate', 'Rosquilla con azucar y chocolate', 'https://www.maxpixel.net/static/photo/1x/Toppings-Snack-Sweets-Plate-Chocolate-Food-Donut-2590583.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Donut de Chocolate', 'Rosquilla con azucar y chocolate', 'https://www.maxpixel.net/static/photo/1x/Toppings-Snack-Sweets-Plate-Chocolate-Food-Donut-2590583.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
