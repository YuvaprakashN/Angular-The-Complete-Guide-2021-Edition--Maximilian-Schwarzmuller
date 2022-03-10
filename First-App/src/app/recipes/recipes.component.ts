import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../service/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe1:Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  //   this.recipeService.selectedRecipe.subscribe(s=>{
  //     console.log(s);
  //     this.selectedRecipe1=s})
  }
}
