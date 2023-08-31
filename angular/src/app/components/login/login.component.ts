import { Component } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm:FormGroup;

  constructor(private userService: UserService, private router:Router, private httpClient:HttpClient, public fb: FormBuilder) {
    this.loginForm=this.fb.group({
      email:[], password:[]
    })
  }

  me = {
    id: 0,
    name: "",
    email: "seb@seb.seb",
    password: "sebsebseb",
  }

  login(){
    this.userService.loginUser(this.loginForm.value)
    this.router.navigate(['/']);
  }

}
