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
url : string = "http://localhost:9080/piPfe-web/rest/students/" 
 constructor(private http: HttpClient) { }

 findStudent(id): Observable<any> {
  return this.http.get<Student>(this.url+"findStudent/"+id);
 } 

 updateStudent(student): Observable<any> {
  return this.http.post(this.url+"updateStudent",student,this.httpOptions); 
 }
 
 hasPfe(id): Observable<any> {
  return this.http.get(this.url+"hasPfe/"+id+"");
 } 

 login(user) {
  return this.http.post(this.url+"login",user,this.httpOptions); 
 }

 signUp(user) {
  return this.http.post(this.url+"signUp",user,this.httpOptions); 
 }

} 