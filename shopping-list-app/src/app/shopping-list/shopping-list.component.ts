import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[] = [
    new Ingredient('Chicken', 5),
    new Ingredient('Vinegar', 15),
    new Ingredient('Soy Sauce', 5),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
