import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";



@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
	testId:number;
  agreeMentChecked:boolean;
  constructor(public router:Router) {
  		this.testId = 1;
      this.agreeMentChecked = false;
   }

  ngOnInit(): void {
  }

  startEventHandler(){
  	this.router.navigate(["/test",this.testId]);
  }

  checkEventHandler(){
    // this.agreeMentChecked = true;
  }



}
