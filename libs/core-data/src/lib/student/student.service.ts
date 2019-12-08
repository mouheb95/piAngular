import { Injectable, SimpleChange } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './Student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  httpOptions = {
   headers: new HttpHeaders({
     'Content-Type':  'application/json'
   })
 };
url : string = "http://localhost:9080/piPfe-web/rest/" 
 constructor(private http: HttpClient) { }

 findStudent(id): Observable<any> {
  return this.http.get<Student>(this.url+"students/findStudent/"+id);
 } 

 updateStudent(student): Observable<any> {
  return this.http.post(this.url+"updateStudent",student,this.httpOptions); 
 }
 
 hasPfe(id): Observable<any> {
  return this.http.get(this.url+"students/hasPfe/"+id);
 } 

 hasIntersheepAgreement(id): Observable<any> {
  return this.http.get(this.url+"interShip_agreement/findintersheep/"+id);
 } 



} 