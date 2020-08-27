import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.css']
})
export class SampleComponentComponent implements OnInit {
	username:string;
	lastname: string;
  constructor() { 
  	this.username = "vaibhv";
  	this.lastname = "gupta";
  }

  ngOnInit(): void {
  }

  userEventHandler(e){
  	this.username = e.target.value;
  }

  inputEventHandler(e){
  	this.username = e.target.value;
  }

}
