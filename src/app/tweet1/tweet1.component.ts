import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-tweet1',
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
      overflow-y:scroll;
      height:610px;
      display:block;
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
  <tr *ngFor="let employee of employees">
    <td>{{employee.tweet_created_at}}</td>
    <td style="text-align:left;">@{{employee.tweet_text}}</td>
    <td>{{employee.tweet_sentiment}}</td>
  </tr>
    </table>
    
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
