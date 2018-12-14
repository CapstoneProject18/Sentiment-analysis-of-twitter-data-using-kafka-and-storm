import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { Tweet1Component } from './tweet1/tweet1.component';
import { Tweet2Component } from './tweet2/tweet2.component';
import { HomeComponent } from './home/home.component';
import { Tweet3Component } from './tweet3/tweet3.component';
import { Tweet4Component } from './tweet4/tweet4.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'EmployeeDetail', component: EmployeeDetailComponent},
  {path: 'EmployeeList', component: EmployeeListComponent},
  {path: 'Tweet1', component: Tweet1Component},
  {path: 'Tweet2', component: Tweet2Component},
  {path: 'Tweet3', component: Tweet3Component},
  {path: 'Tweet4', component: Tweet4Component},
  {path: 'Home', component: HomeComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ EmployeeDetailComponent, EmployeeListComponent, Tweet1Component,  Tweet2Component, Tweet3Component, Tweet4Component, HomeComponent]