import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../service/recipe.service';
import { map, tap } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class DataStorageService {
  private fireBaseURL = ;
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(this.fireBaseURL + '/recipes.json', recipes)
      .subscribe((s) => console.log(s));
  }
  getRecipes() {
  return  this.http
      .get<Recipe[]>(this.fireBaseURL + '/recipes.json')
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap(recipes=>{
          this.recipeService.setRecipes(recipes)
        })
      )

  }
}
