import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
loginForm=new FormGroup({
	userName: new FormControl("",Validators.required),
	password:new FormControl("",[Validators.required,Validators.pattern('/^[1-9a-zA-Z],Validators.minLength(8)')]),
	age:new FormControl(""),	
})
  constructor() { }

  ngOnInit(): void {
  }

  submitEventHandler(){
  	// this.userName.setValue("vaibhav");
  	console.log(this.loginForm.value);
  }

}
