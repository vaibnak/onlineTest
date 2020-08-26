import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { Questions } from "../questions";


@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {
	testId:number;
	totalScore:number;
	allQuestions:Questions[] = new Array();
	showResult:boolean;
	showQuestion:boolean;
  constructor(public route:ActivatedRoute, private router:Router) {
  	console.log("constructor called");
  	this.testId = Number(this.route.snapshot.paramMap.get('testId'));
  	this.allQuestions.push(new Questions("what is the capital of India","delhi","canberra","sydney","new york",1));
  	this.allQuestions.push(new Questions("what is the capital of Australia","adelaide","canberra","sydney","new york",2));
  	this.allQuestions.push(new Questions("what is the capital of south africa","capetown","canberra","sydney","new york",1));
  	this.allQuestions.push(new Questions("what is the capital of America","delhi","washington dc","sydney","new york",2));
  	this.allQuestions.push(new Questions("what is the capital of Newzeland","wellington","washington dc","sydney","new york",1));
  	this.allQuestions.push(new Questions("what is the capital of uganda","delhi","washington dc","kampala","new york",3));
  	this.allQuestions.push(new Questions("what is the capital of zimbabwe","delhi","harare","sydney","new york",2));
  	this.allQuestions.push(new Questions("what is the capital of pakistan","islamabad","washington dc","sydney","new york",1));
  	this.allQuestions.push(new Questions("what is the capital of iran","delhi","tehran","sydney","new york",2));
  	this.allQuestions.push(new Questions("what is the capital of afganistan","delhi","washington dc","sydney","kabul",4));
  	this.totalScore = 0;
  	this.showResult = false;
  	this.showQuestion = true;
   }

  ngOnInit(): void {
  		console.log("ngOnInit called");
  		
  }

  nextEventHandler(){
  	// this.testId++;
  	// console.log("next clicked");
  	// console.log(this.testId);
  	// this.router.navigate(["/test",this.testId]);
  }

  templateForm(value: any) {
  	let val:number;

  	val = Number(value.gender);
  	console.log(val);
  	if(val == this.allQuestions[this.testId-1].ans){
  		this.totalScore++;
  	}
  	this.testId++;
  	if(this.testId>10){
  		this.showResult = true;
  		this.showQuestion = false;
  	}
  	console.log("next clicked");
  	console.log(this.testId);
  	this.router.navigate(["/test",this.testId]);	

  }

}
