import { Recipe } from '../recepies/recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipes: Recipe[] = [
        // tslint:disable-next-line:max-line-length
        new Recipe('First Recipe', 'Testing Recipe description', 'https://cdn1.imggmi.com/uploads/2019/7/24/859f34ef1fc24a2e5cf76050588ea660-full.jpg'),
        // tslint:disable-next-line:max-line-length
        new Recipe('Second Recipe ', 'Testing Recipe description', 'https://cdn1.imggmi.com/uploads/2019/7/24/50e0f0b9c813e0baf2f6bca4c641afb0-full.jpg')
      ];

      recipeDetail = new EventEmitter<Recipe>();

      getrecipes(){
          return this.recipes.slice();
      }

    

}