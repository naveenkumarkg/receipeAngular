import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],

})
export class RecipeListComponent implements OnInit {
  @Output() recipeDetail = new EventEmitter<Recipe>()
recipes: Recipe[];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
   this.recipes = this.recipeService.getrecipes();
  }

  recipeDetails(item: Recipe){
    this.recipeService.recipeDetail.emit(item);
   // this.recipeDetail.emit(item)


  }

}
