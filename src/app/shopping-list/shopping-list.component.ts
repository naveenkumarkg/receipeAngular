import { Component, OnInit } from '@angular/core';
import { Ingredient } from './shopping.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Banana', 10)
  ]


  constructor() { }
  ngOnInit() {
  }

  ingredientNew(item: Ingredient) {
    this.ingredients.push(item); // adding to the list
  }

}
