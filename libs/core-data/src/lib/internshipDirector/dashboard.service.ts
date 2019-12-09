import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { student } from './students.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  url : string = "http://localhost:9080/piPfe-web/rest/dashboard" 
  constructor(private http: HttpClient) { }


  AllStageEtudiantEtranger(): Observable<any> {
    return this.http.get<student[]>(this.url+'/AllStageEtudiantEtranger');
    
   }

}
