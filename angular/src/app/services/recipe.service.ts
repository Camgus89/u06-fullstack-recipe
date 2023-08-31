import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  appid = "a9c541b9";
  appkey = "179a9dc6859d21984ddf8559cef392d9";
  urlConfig = "";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept-Language': 'en'
    })
  }

  constructor(private http: HttpClient) { }

  getRecipes(q: string) {
    let searchquery = "https://api.edamam.com/api/recipes/v2?type=public" + "&q=" + q + "&app_id=" + this.appid + "&app_key=" + this.appkey + "&cuisineType=American&mealType=Dinner&field=label&field=image&field=ingredientLines"

    return this.http.get<any>(searchquery, this.httpOptions);
  }

  getRecipe(id: string) {
    let searchquery = "https://api.edamam.com/api/recipes/v2/" + id + "?type=public&app_id=" + this.appid + "&app_key=" + this.appkey + "&field=label&field=image&field=ingredientLines"

    return this.http.get<any>(searchquery, this.httpOptions);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
