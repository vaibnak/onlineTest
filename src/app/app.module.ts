import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
import { TestpageComponent } from './testpage/testpage.component';
import { RegisterComponent } from './register/register.component';
import { ManageQuestionsService } from './manage-questions.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartComponent,
    TestpageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ManageQuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
