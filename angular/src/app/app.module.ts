import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes/recipes.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecipeFilterComponent } from './components/recipe-filter/recipe-filter.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipesComponent,
    HeaderComponent,
    ButtonComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    RecipeFilterComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
