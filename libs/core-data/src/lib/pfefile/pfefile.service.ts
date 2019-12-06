import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PfeFile } from './Pfefile';

@Injectable({
  providedIn: 'root'
})
export class PfefileService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
 url : string = "http://localhost:9080/piPfe-web/rest/pfeFiles/" 
  constructor(private http: HttpClient) { }
 
  createPfeFile(pfefile: PfeFile): Observable<any> {

   return this.http.post(this.url+"addPfe", pfefile, this.httpOptions);
  }

  updatePfeFile(pfefile: PfeFile): Observable<any> {

    return this.http.post(this.url+"updatePfe", pfefile, this.httpOptions);
   }

  cancelPfeFile(pfefile: PfeFile): Observable<any> {

    return this.http.post(this.url+"cancelPfe", pfefile, this.httpOptions);
   } 

   findCompanyAll(): Observable<any> {
    return this.http.get(this.url+"findCompanyAll");
   } 
}
