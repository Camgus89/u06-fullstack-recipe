import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes/recipes.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component'; // Uppdatera sökvägen beroende på din projektstruktur

const routes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'welcome', component: WelcomeComponent }, // Lägg till den här vägen
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
