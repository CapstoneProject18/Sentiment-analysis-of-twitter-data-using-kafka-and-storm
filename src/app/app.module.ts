import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents  } from './app-routing.module';

import { AppComponent } from './app.component';

import { EmployeeService } from './employee.service';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Tweet1Component } from './tweet1/tweet1.component';
import { Tweet2Component } from './tweet2/tweet2.component';
import { Tweet3Component } from './tweet3/tweet3.component';
import { Tweet4Component } from './tweet4/tweet4.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    Tweet1Component,
    Tweet2Component,
    Tweet3Component,
    Tweet4Component
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
