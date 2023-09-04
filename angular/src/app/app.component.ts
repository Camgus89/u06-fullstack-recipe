import { Component } from '@angular/core';
import { UserService } from './auth/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe';

  me = {
    id: 0,
    name: "",
    email: "seb@seb.seb",
    password: "sebsebseb",
  }
  //LOGIN FORMULÄR

  user2 = {
    id: 0,
    name: "",
    email: "",
    password: "",
  }

  constructor(private userService: UserService){
  }


  logout(){
    this.userService.logoutUser(this.me)
  }

}
