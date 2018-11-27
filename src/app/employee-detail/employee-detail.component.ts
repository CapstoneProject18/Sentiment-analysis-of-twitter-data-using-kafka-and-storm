import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail',
  template: `
  <style>
    h2{
      font-family:product sans;
      background-color: #e0e0e0;
      text-align: center;
    }
    table{
      font-family: product sans;
      border-collapse: collapse;
      width: 100%;
      text-align: center;
    }
    tr, th, td{
      font-family: product sans;
      border: 1px solid #dddddd;
      padding: 8px;
      }

      td{
        padding: 0.5em 8em;
      }
      
      tr:nth-child(even) {
        background-color: #dddddd;
      }
  </style>
    <h2 style>Tweets Detail along with sentiments</h2>
    <table>
  <tr>
    <th>User Id</th>
    <th>Tweet</th>
    <th>Sentiment</th>
  </tr>
  <tr *ngFor="let employee of employees">
    <td>{{employee.userid}}</td>
    <td>{{employee.tweet}}</td>
    <td>{{employee.sentiment}}</td>
  </tr>
    </table>
  
    <ul *ngFor="let employee of employees">
      <li>Id = {{employee.userid}}  -  {{employee.tweet}}</li>
      <br> Sentiment = {{employee.sentiment}}
    </ul>
    
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data);
  }

}
