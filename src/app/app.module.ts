import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents  } from './app-routing.module';

import { AppComponent } from './app.component';

import { EmployeeService } from './employee.service';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Tweet1Component } from './tweet1/tweet1.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    Tweet1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
