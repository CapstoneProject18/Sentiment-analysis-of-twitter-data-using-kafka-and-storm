import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "http://localhost:8083/json-api";
  

  constructor(private http: HttpClient) { }
  
  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
}
