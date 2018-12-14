import { Component, OnInit } from '@angular/core';
import { Employee1Service } from '../employee1.service';

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
      width: 90%;
      }
    tr, th, td{
      font-family: product sans;
      border: 1px solid #dddddd;
      padding: 8px;
      }

      /*td{
        padding: 0.5em 8em;
      }*/

      th{
        text-align:center;
        font-size:2rem;
      }
      
      tr:nth-child(even) {
        background-color: #dddddd;
      }
  </style>
    <h2 style="background-color:#00b3b4; color:white; margin-right:5%; margin-left:5%;" >Tweets Detail along with sentiments</h2>
    <table align="center"s>
  <tr>
    <th>Created At</th>
    <th>Tweet/ReTweet</th>
    <th>Sentiment</th>
  </tr>
  <tr *ngFor="let employee1 of employees">
    <td>{{employee1.tweet_created_at}}</td>
    <td style="text-align:left;">@{{employee1.tweet_text}}</td>
    <td>{{employee1.tweet_sentiment}}</td>
  </tr>
    </table>
    
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];

  constructor(private _employee1Service: Employee1Service) { }

  ngOnInit() {
    this._employee1Service.getEmployees()
      .subscribe(data => this.employees = data);
  }

}
