import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from '../recipes/recipes.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipesStartComponent } from '../recipes/recipes-start/recipes-start.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from '../service/recipe-resolver.service';
import { AuthComponent } from '../auth/auth.component';
import { AuthGuard } from '../service/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '../service/auth-interceptor.service';


const appRoutes:Routes=[
  {path:"",redirectTo:"/recipes",pathMatch:'full'},
  {path:"recipes",component:RecipesComponent,canActivate:[AuthGuard],children:[
    {path:"",component:RecipesStartComponent,resolve:[RecipeResolverService]},
    {path:"new",component:RecipeEditComponent}, //HArdcode url declare first and then add dynamic routes
    {path:":id",component:RecipeDetailComponent,resolve:[RecipeResolverService]},
    {path:":id/edit",component:RecipeEditComponent,resolve:[RecipeResolverService]}
  ]},
  {path:"shoppingList",component:ShoppingListComponent},
  {path:"auth",component:AuthComponent}
]

@NgModule({

  imports: [
    RouterModule.forRoot(appRoutes)
  ],exports:[RouterModule],
  providers:[{provide: HTTP_INTERCEPTORS,useClass: AuthInterceptorService,multi: true}]
})
export class AppRoutingModule { }
