import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
