import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {
  recipeDetailsFromList: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
   this.recipeService.recipeDetail.subscribe((val: Recipe) => this.recipeDetailsFromList = val);

  }

}
