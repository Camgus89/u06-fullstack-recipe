import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { User } from '../user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // name: string = '';
  // email: string = '';
  // password: string = '';
  // password_confirmation: string = '';

  configURL = "http://localhost:8000/api/";


  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
    })
  }

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(user: User) {
    this.http.post<any>(this.configURL + "login", user, this.httpOptions)
      .pipe(catchError(this.handleError))
      .subscribe(res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        console.log("test successful");
        this.router.navigate(['/welcome'], { queryParams: { userName: user.name } });
      });
  }

  logoutUser(user: User) {
    localStorage.removeItem("token");
    console.log("logged out")
  }

  registerUser(user: User) {
    this.http.post<any>(this.configURL + "register", user, this.httpOptions)
    .pipe(catchError(this.handleError))
    .subscribe(res => {
      console.log(res);
      // localStorage.setItem("token", res.token);
    })
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
