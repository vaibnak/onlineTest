import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
import { TestpageComponent } from './testpage/testpage.component';
import { RegisterComponent } from './register/register.component';
import { SampleComponentComponent } from './sample-component/sample-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartComponent,
    TestpageComponent,
    RegisterComponent,
    SampleComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
