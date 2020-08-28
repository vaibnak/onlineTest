import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
import { TestpageComponent } from './testpage/testpage.component';
import { RegisterComponent } from './register/register.component';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartComponent,
    TestpageComponent,
    RegisterComponent,
    SampleComponentComponent,
    ReactiveformComponent,
    DirectiveExampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
