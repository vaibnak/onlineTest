import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {
	styleObj:Object;
	priority;
  constructor() {
  	this.styleObj = {
  		"background-color":"pink",
  		"font-size":"36px",
  		"border":"5px  red solid" 
  	}
  	this.priority="";
   }

  ngOnInit(): void {
  }

  changestyleEventHandler(){
  	this.styleObj={
  		"background-color":"yellow",
  		"font-size":this.priority>5?"48px":"5px",
  	}
  }

}
