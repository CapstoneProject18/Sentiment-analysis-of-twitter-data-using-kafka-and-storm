import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-tweet1',
  template: `
  <style>
    h1{
      font-family: product sans;
      text-align: center;
      margin-top: 10%;
    }
  </style>
  <h1>COMING SOON...</h1>
  `,
  styleUrls: []
})
export class Tweet1Component implements OnInit {

  public employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data);
  }

}
