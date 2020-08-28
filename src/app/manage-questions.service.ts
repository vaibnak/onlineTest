import { Injectable } from '@angular/core';
import { Questions } from "./questions";

@Injectable({
  providedIn: 'root'
})
export class ManageQuestionsService {

allQuestions:Questions[] = new Array();
userAnswer = new Array();

  constructor() {

  	this.allQuestions.push(new Questions(1,"what is the capital of India","delhi","canberra","sydney","new york",1));
  	this.allQuestions.push(new Questions(2,"what is the capital of Australia","adelaide","canberra","sydney","new york",2));
  	this.allQuestions.push(new Questions(3,"what is the capital of south africa","capetown","canberra","sydney","new york",1));
  	this.allQuestions.push(new Questions(4,"what is the capital of America","delhi","washington dc","sydney","new york",2));
  	this.allQuestions.push(new Questions(5,"what is the capital of Newzeland","wellington","washington dc","sydney","new york",1));
  	this.allQuestions.push(new Questions(6,"what is the capital of uganda","delhi","washington dc","kampala","new york",3));
  	this.allQuestions.push(new Questions(7,"what is the capital of zimbabwe","delhi","harare","sydney","new york",2));
  	this.allQuestions.push(new Questions(8,"what is the capital of pakistan","islamabad","washington dc","sydney","new york",1));
  	this.allQuestions.push(new Questions(9,"what is the capital of iran","delhi","tehran","sydney","new york",2));
  	this.allQuestions.push(new Questions(10,"what is the capital of afganistan","delhi","washington dc","sydney","kabul",4));

   }

   getAllQuestions(){
   		return this.allQuestions;
   }

   putUserAnswer(qId,ans){
   		this.userAnswer.push({qId:qId,ans:ans});
   }

   getAllUserAnswers(){
   		return this.userAnswer;
   }

   getTotalMarks(){
   		let marks = 0;
   		for(let i=0;i<this.allQuestions.length;i++){
   			if(this.allQuestions[i].ans == this.userAnswer[i].ans){
   				marks++;
   			}
   		}

   		return marks;
   }
}
