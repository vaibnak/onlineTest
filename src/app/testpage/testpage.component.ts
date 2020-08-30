import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { Questions } from "../questions";
import {ManageQuestionsService} from "../manage-questions.service";


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
  checkId:string;
  finish:boolean;
  manageQuestions:ManageQuestionsService;
  optionSelected:boolean;
  correctAnswers:number[];
  wrongAnswers:number[];

  constructor(public route:ActivatedRoute, private router:Router, public manageQuestionsTmp:ManageQuestionsService) {
  	console.log("constructor called");
  	this.testId = Number(this.route.snapshot.paramMap.get('testId'));
  	this.allQuestions = manageQuestionsTmp.getAllQuestions();
  	this.manageQuestions = manageQuestionsTmp;
    this.totalScore = 0;
  	this.showResult = false;
  	this.showQuestion = true;
    this.finish = false;
    this.optionSelected = false;
   }

  ngOnInit(): void {
  		console.log("ngOnInit called");
  		
  }

  nextEventHandler()
  {
    let val:number;
    console.log(typeof(this.checkId));
    val = Number(this.checkId);
    console.log(val);
    this.checkId = "0";
    this.manageQuestions.putUserAnswer(this.testId,val);
    this.testId++;
    this.optionSelected = false;
    if(this.testId == 10){
      this.finish = true;
    }
    if(this.testId>10){
      this.showResult = true;
      this.showQuestion = false;
      this.totalScore = this.manageQuestions.getTotalMarks();
      this.correctAnswers = this.manageQuestions.getCorrectAnswer();
      this.wrongAnswers = this.manageQuestions.getWrongAnswer();
    }

    console.log(this.testId);
    this.router.navigate(["/test",this.testId]);  

  }
  templateForm(value: any) {
  	
  }

  changeRaidioEventHandler(p1:string){
    console.log(p1);
  }

}
