import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-filter',
  templateUrl: './recipe-filter.component.html',
  styleUrls: ['./recipe-filter.component.css']
})
export class RecipeFilterComponent {
  selectedMealType: string = 'all';

  @Output() filterChanged = new EventEmitter<string>();

  filterRecipes() {
    this.filterChanged.emit(this.selectedMealType);
  }
}
