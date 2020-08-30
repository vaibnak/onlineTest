import { Injectable } from '@angular/core';
import { Questions } from "./questions";

@Injectable({
  providedIn: 'root'
})
export class ManageQuestionsService {

allQuestions:Questions[] = new Array();
userAnswer = new Array();
correctAnswer = new Array();
wrongAnswer = new Array();

  constructor() {

  	this.allQuestions.push(new Questions(1,"Which was the first purely object oriented programming language developed?"," Java","C++","SmallTalk","Kotlin",3));
  	this.allQuestions.push(new Questions(2,"Which of the following best defines a class?","Parent of an object","Instance of an object","Blueprint of an object","Scope of an object",2));
  	this.allQuestions.push(new Questions(3,"Who invented OOP?","Alan Kay","Andrea Ferro","Dennis Ritchie","Adele Goldberg",1));
  	this.allQuestions.push(new Questions(4,"What is the additional feature in classes that was not in structures?","Data members","Member functions","Static data allowed","Public acces specifier",2));
  	this.allQuestions.push(new Questions(5,"Which is not feature of OOP in general definitions?","Code reusability","Modularity","Duplicate/Redundant data","Efficient Code",3));
  	this.allQuestions.push(new Questions(6,"Which Feature of OOP illustrated the code reusability?","Polymorphism","Abstraction","Encapsulation","Inheritance",4));
  	this.allQuestions.push(new Questions(7,"Which language does not support all 4 types of inheritance?","C++","Java","Kotlin","Small Talk",2));
  	this.allQuestions.push(new Questions(8,"How many classes can be defined in a single program?","Only 1","Only 100","Only 999","As many as you want",4));
  	this.allQuestions.push(new Questions(9,"When OOP concept did first came into picture?","1970","1980","1993","1995",1));
  	this.allQuestions.push(new Questions(10,"Why Java is Partially OOP language?","It supports usual declaration of primitive data types","It doesn’t support all types of inheritance","It allows code to be written outside classes","It does not support pointers",1));
    this.allQuestions.push(new Questions(11,"Which concept of OOP is false for C++?","Code can be written without using classes","Code must contain at least one class","A class must have member functions","At least one object should be declared in code",2));
    this.allQuestions.push(new Questions(12,"Which header file is required in C++ to use OOP?","iostream.h","stdio.h","stdlib.h","OOP can be used without using any header file",4));
    this.allQuestions.push(new Questions(13,"Which of the two features match each other?","Inheritance and Encapsulation","Encapsulation and Polymorphism","Encapsulation and Abstraction","Abstraction and Polymorphism",3));
    this.allQuestions.push(new Questions(14,"Which feature allows open recursion, among the following?","Use of this pointer","Use of pointers","Use of pass by value","Use of parameterized constructor",1));
    this.allQuestions.push(new Questions(15,"Whos is the developer of c++?","Dennis Richtie","Bjarne Stroustrup","Sam Arora","Anish Giri",2));
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
   				 this.correctAnswer.push(this.userAnswer[i].qId);
           marks++;
   			}else{
           this.wrongAnswer.push(this.userAnswer[i].qId);
         }
   		}

   		return marks;
   }

   getCorrectAnswer(){
     return this.correctAnswer;
   }
   getWrongAnswer(){
     return this.wrongAnswer;
   }
}
