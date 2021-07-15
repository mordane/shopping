import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable({providedIn: 'root'})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]),
    new Recipe('A Test Recipe', 'A test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', []),
    new Recipe('Another Recipe', 'Recipe description', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', []),
    new Recipe('Veggie Fritters', 'These veggie fritters with corn, chickpeas, and bell pepper are super easy to make, they are vegan', 'https://elavegan.com/wp-content/uploads/2019/02/vegan-veggie-fritters-with-corn-pepper-gluten-free-recipe-on-a-plate.jpg', [])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
     this.shoppingListService.addIngredients(ingredients);
  }
 }
