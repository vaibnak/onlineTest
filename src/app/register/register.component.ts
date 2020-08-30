import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm = new FormGroup({
  name: new FormControl('',[Validators.required]),
  userName: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
  confirmPassword: new FormControl('',[Validators.required]),
  address: new FormControl('',[Validators.required]),
  gender: new FormControl('',[Validators.required]) 
},this.pwdMatchValidator);



  constructor() { }

  ngOnInit(): void {
  }

  pwdMatchValidator(frm:FormGroup){
  	return frm.get('password').value === frm.get('confirmPassword').value?null:{'mismatch':true};
  }

}
