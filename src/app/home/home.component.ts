import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-home',
  template: `
    <style>
    h3, p, ol {
      font-family: product sans;
      margin-left:7.5%;
      margin-right: 7.5%;
    }
    h3{
      background-color: #e0e0e0; 
    }
    p, ol{
      font-size: 1.125em;
    </style>
    <h2 style="font-family: product sans; text-align: center; color:maroon"><b>Welcome to our website.</b></h2>
        <h3>What our platform does?</h3>
        <p>Our website gives you the opportunity to see the tweets which 
        we are taking directly from the Twitter using API. Our website
         allows you to check the sentiments associated with those tweets.
          For achieving this, we are using Kafka for pipelining the data from 
          the twitter API and then we are using Storm to further process the
           data that we are taking from the Twitter. As a result, we get
            Sentiments associated with those tweets beside every tweet.
             Then we are displaying it in our webpage using Angular 7.</p>
   
        <h3>How our platform is useful?</h3>

        <h3>How to use our platform?</h3>
        <p>As an end user, what our platform will provide you is that, you will be able to see the tweets
           from the twitter in our web page which will be segregated in specified domains like Political 
           Tweets, Social Tweets, Celebrity Tweets, Sports Tweets etc. Clicking on any of the domain will
            show you the list of tweets with the most recent tweets on top and sentiments on the rightmost 
            section of that tweet.</p>
   
        <h3>Major Technologies Used in this platform.</h3>
        <ol>
          <li>Kafka</li><br>
          <li>Storm</li><br>
          <li>Angular</li><br>
        </ol>

        <h3>What each of these Technologies are doing individually?</h3>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
