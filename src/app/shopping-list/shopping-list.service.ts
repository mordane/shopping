import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";

@Injectable({providedIn: 'root'})
export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getShoppingList(): Ingredient[] {
    return this.ingredients.slice();
  }

  AddIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);

    this.ingredientAdded.emit();
  }
}
