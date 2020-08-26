import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {StartComponent} from "./start/start.component";
import {TestpageComponent} from "./testpage/testpage.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
	{path:"login", component: LoginComponent},
	{path:"start",component: StartComponent},
	{path:"test/:testId",component: TestpageComponent},
	{path:"register", component: RegisterComponent},
	{path: "", redirectTo: "/login",pathMatch:"full"},
	{path:"**", component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
