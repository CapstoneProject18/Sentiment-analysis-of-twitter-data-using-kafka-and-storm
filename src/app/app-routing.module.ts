import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { Tweet1Component } from './tweet1/tweet1.component';
import { Tweet2Component } from './tweet2/tweet2.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'EmployeeDetail', component: EmployeeDetailComponent},
  {path: 'EmployeeList', component: EmployeeListComponent},
  {path: 'Tweet1', component: Tweet1Component},
  {path: 'Tweet2', component: Tweet2Component},
  {path: 'Home', component: HomeComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ EmployeeDetailComponent, EmployeeListComponent, Tweet1Component,  Tweet2Component, HomeComponent]