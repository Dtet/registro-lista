import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor( private http: HttpClient ) { }

    opts = []; 

    getData(){
      
    }
}
