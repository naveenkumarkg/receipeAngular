import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeDetail = new EventEmitter<Recipe>()
recipes: Recipe[] = [
  // tslint:disable-next-line:max-line-length
  new Recipe('First Recipe', 'Testing Recipe description', 'https://cdn1.imggmi.com/uploads/2019/7/24/859f34ef1fc24a2e5cf76050588ea660-full.jpg'),
  new Recipe('Second Recipe ', 'Testing Recipe description', 'https://cdn1.imggmi.com/uploads/2019/7/24/50e0f0b9c813e0baf2f6bca4c641afb0-full.jpg')
];
  constructor() { }

  ngOnInit() {
  }

  recipeDetails(item){
    this.recipeDetail.emit(item)


  }

}
