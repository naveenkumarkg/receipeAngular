import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {
  recipeDetailsFromList: Recipe;
  constructor() { }

  ngOnInit() {
  }

  recipeDetail(item){
    console.log("r",item);
    this.recipeDetailsFromList = item;

  }

}
