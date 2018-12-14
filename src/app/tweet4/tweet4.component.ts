import { Component, OnInit } from '@angular/core';
import { Employee4Service } from '../employee4.service';

@Component({
  selector: 'app-tweet4',
  template:  `
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
    <table align="center">
  <tr>
    <th>Created At</th>
    <th>Tweet/ReTweet</th>
    <th>Sentiment</th>
  </tr>
  <tr *ngFor="let employee4 of employees">
    <td>{{employee4.tweet_created_at}}</td>
    <td style="text-align:left;">@{{employee4.tweet_text}}</td>
    <td>{{employee4.tweet_sentiment}}</td>
  </tr>
    </table>
    <br>
    <br>
    

    <footer style="background:black; color:white; margin-right:5%; margin-left:5%; width:90%; ">
    
      <p style="text-align: center; font-style: product sans;">Thankyou for visiting our website!!!</p>
    
    </footer>


  `,
  styleUrls: []
})

export class Tweet4Component implements OnInit {

  public employees = [];

  constructor(private _employee4Service: Employee4Service) { }

  ngOnInit() {
    this._employee4Service.getEmployees()
      .subscribe(data => this.employees = data);
  }

}
