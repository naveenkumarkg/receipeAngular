import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnChanges {
@Input() recipeDetailsFromList: Recipe;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  this.recipeDetailsFromList;
  }

  

}
