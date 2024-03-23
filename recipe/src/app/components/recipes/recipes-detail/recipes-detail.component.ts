import { Component, Input } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
    selector: 'app-recipes-detail',
    templateUrl: './recipes-detail.component.html',
    styleUrl: './recipes-detail.component.scss'
})
export class RecipesDetailComponent {
    @Input() recipeDetail : Recipe;
    
}
