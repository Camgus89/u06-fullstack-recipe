import { Component } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  title: string = '';
  searchquery = "";
  allRecipes: any;

  constructor(private recipeService:RecipeService){}

  getRecipes(){
    this.recipeService.getRecipes(this.searchquery).subscribe(result => {
      let recipes = result.hits.map((data: any) => {
        let recipe = data.recipe;
        recipe.idref = data._links.self.href.slice(38,70);
        return recipe;
      })
      console.log(result.hits[0]);
      console.log(recipes)

      this.allRecipes = recipes;
    })
  }
}
