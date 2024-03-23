import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrl: './recipes.component.scss'
})
export class RecipesComponent {


    recipeFormList : Recipe ;

    getRecipeFromList(e : Recipe)
    {
        this.recipeFormList = e;
    }
}
