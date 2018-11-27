import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail',
  template: `
  <style>
    h2{
      font-family:product sans;
      background-color: #efeded;
      text-align: center;
    }
    table{
      font-family: product sans;
      border-collapse: collapse;
      width: 100%;
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
    <th>Created At</th>
    <th>Username</th>
    <th>Tweets/Retweet</th>
  </tr>
  <tr *ngFor="let employee of employees">
    <td>{{employee.created_at}}</td>
    <td style="text-align:left;">@{{employee.user.screen_name}}</td>
    <td>{{employee.text}}</td>
  </tr>
    </table>
    
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
