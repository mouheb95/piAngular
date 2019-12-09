import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PfefileService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  url : string = "http://localhost:9080/piPfe-web/rest/hod" 
  constructor(private http: HttpClient) { }


  pfeFilesWithoutValidator(currentUser_id): Observable<any> {
    return this.http.get<PfeFile[]>(this.url+'/dpfefilewv/'+currentUser_id);
    
   } 

   pfeFilesWithoutFramer(currentUser_id): Observable<any> {
    return this.http.get<PfeFile[]>(this.url+'/dpfefilewf/'+currentUser_id);
    
   } 

   pfeFilesWithoutReporter(currentUser_id): Observable<any> {
    return this.http.get<PfeFile[]>(this.url+'/dpfefilewr/'+currentUser_id);
    
   }

   allTeacher(): Observable<any> {
    return this.http.get<PfeFile[]>(this.url+'/getallteach');
    
   } 

   allPfeFile(currentUser_id): Observable<any> {
    return this.http.get<PfeFile[]>(this.url+'/dpfefile/'+currentUser_id);
    
   }

   affectationValidateur(obj) {

    return this.http.post(this.url+'/affval', obj, this.httpOptions);
   }

     affectationFramer(obj) {

    return this.http.post(this.url+'/afffr', obj, this.httpOptions);
   }

   affectationReporter(obj) {
    return this.http.post(this.url+'/affrep', obj, this.httpOptions);
   }

   teacherByCategory(idC) {
    return this.http.get<PfeFile[]>(this.url+'/getteachbycat/'+idC);
    
   }

   pfeFilesWithoutNoteF(currentUser_id): Observable<any> {
    return this.http.get<PfeFile[]>(this.url+'/dpfefilewnf/'+currentUser_id);
    
   }

   pfeFilesWithoutNoteR(currentUser_id): Observable<any> {
    return this.http.get<PfeFile[]>(this.url+'/dpfefilewnr/'+currentUser_id);
    
   }

   allPfeFileHistory(a): Observable<any> {
    return this.http.get<PfeFile[]>(this.url+'/gethistory/'+a);
    
   } 
   

}
export interface PfeFile {
  constructor(id: string, description: string, key: string, internshipReporter: Teacher)
  id: String;  
  description: String;  
  key: String; 
  internshipReporter: Teacher; 

}




export interface Teacher {
  constructor(id: string, name: string, email: string )
  id: String;  
  name: String;  
  email: String;  

}