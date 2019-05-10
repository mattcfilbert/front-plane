import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Part } from '../models/part';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  API_URL  =  'http://localhost:3000';
  constructor(private  httpClient:  HttpClient) { }
  getFirstPage(){
    return  this.httpClient.get(`${this.API_URL}/parts`)
  }

  addPart (part: Part) {
    console.log('service', part)
    return this.httpClient.post<Part>(`${this.API_URL}/parts`, part).subscribe(
      (val) => {
          console.log("POST call successful value returned in body", val)
      },
      response => {
          console.log("POST call in error", response)
      },
      () => {
          console.log("The POST observable is now completed.")
      });
  }

  
}
