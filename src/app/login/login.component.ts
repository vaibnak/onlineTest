import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm = new FormGroup({
  userName: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
})


  constructor(public router:Router) { 
  	console.log("in login component")
  }

  ngOnInit(): void {
  }

  registerEventHandler(){
  	console.log("register button clicked");
  	this.router.navigateByUrl("./register")
  }

  loginEventHandler(){
  	this.router.navigateByUrl("./start");
  }

}
