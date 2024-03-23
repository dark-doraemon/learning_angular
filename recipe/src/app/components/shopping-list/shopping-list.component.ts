import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { Ingredient } from '../../models/ingredients.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent implements OnInit {
   
    ingredients : Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
    ];
    
    constructor() {

    }
    AddIngre(e : Ingredient)
    {
        this.ingredients.push(e);
    }
    ngOnInit(): void {

    }
}
