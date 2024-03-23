import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../../../models/recipe.model';

@Component({
    selector: 'app-recipes-item',
    templateUrl: './recipes-item.component.html',
    styleUrl: './recipes-item.component.scss'
})
export class RecipesItemComponent {

    @Input() recipes : Recipe[];

    @Output() selectedRecipe : EventEmitter<Recipe> = new EventEmitter<Recipe>;
    onClickRecipe(recipe : Recipe)
    {
        this.selectedRecipe.emit(recipe);
    }
}
