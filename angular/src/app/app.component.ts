import { Component } from '@angular/core';
import { UserService } from './auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe';
  logoutMessageVisible: boolean = false;

  me = {
    id: 0,
    name: "",
    email: "seb@seb.seb",
    password: "sebsebseb",
  }

  user2 = {
    id: 0,
    name: "",
    email: "",
    password: "",
  }

  isLoggedIn: boolean = false; // Lägg till isLoggedIn som en boolesk egenskap

  constructor(private userService: UserService) {
    // Uppdatera isLoggedIn baserat på om token finns i localStorage
    this.isLoggedIn = localStorage.getItem("token") !== null;
  }

  logout() {
    this.userService.logoutUser();
    this.logoutMessageVisible = true; // Visa meddelandet när användaren loggar ut
  }
}
