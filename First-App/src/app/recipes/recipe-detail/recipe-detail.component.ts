import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/service/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  //@Input() recipe:Recipe
  recipe: Recipe;
  id: number;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }
  onEditRecipe(){
this.router.navigate(['edit'],{relativeTo:this.route})
//this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route}) //same as above, its complex route
  }
  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
