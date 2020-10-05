import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Adobo sa Sinigang na Manok Recipe', 'Tasty Filipino Dish', 'https://via.placeholder.com/300/09f/fff.png'),
    new Recipe('Sinigang Recipe', 'Tasty Filipino Dish', 'https://via.placeholder.com/300/09f/fff.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
