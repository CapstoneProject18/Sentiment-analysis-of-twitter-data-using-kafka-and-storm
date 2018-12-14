import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class Employee3Service {

  private _url: string = "assets/employee3.json";
  

  constructor(private http: HttpClient) { }
  
  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
}
