import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({providedIn: 'root'})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'A test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Another Recipe', 'Recipe description', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Veggie Fritters', 'These veggie fritters with corn, chickpeas, and bell pepper are super easy to make, they are vegan', 'https://elavegan.com/wp-content/uploads/2019/02/vegan-veggie-fritters-with-corn-pepper-gluten-free-recipe-on-a-plate.jpg')
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
 }
