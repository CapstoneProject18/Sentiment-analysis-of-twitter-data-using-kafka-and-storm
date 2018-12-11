import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { Tweet1Component } from './tweet1/tweet1.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'EmployeeList', component: EmployeeListComponent},
  {path: 'EmployeeDetail', component: EmployeeDetailComponent},
  {path: 'Tweet1', component: Tweet1Component},
  {path: 'Home', component: HomeComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [EmployeeListComponent, EmployeeDetailComponent, Tweet1Component, HomeComponent]