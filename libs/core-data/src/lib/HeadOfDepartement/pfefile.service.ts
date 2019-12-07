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


  pfeFilesWithoutValidator(): Observable<any> {
    return this.http.get<PfeFile[]>(this.url+'/dpfefilewv/57');
    
   } 

   pfeFilesWithoutFramer(): Observable<any> {
    return this.http.get<PfeFile[]>(this.url+'/dpfefilewf/57');
    
   } 

   pfeFilesWithoutReporter(): Observable<any> {
    return this.http.get<PfeFile[]>(this.url+'/dpfefilewr/57');
    
   }

   allTeacher(): Observable<any> {
    return this.http.get<PfeFile[]>('http://localhost:9080/piPfe-web/rest/pfe_files/allTeacher');
    
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

   pfeFilesWithoutNoteF(): Observable<any> {
    return this.http.get<PfeFile[]>(this.url+'/dpfefilewnf/57');
    
   }

   pfeFilesWithoutNoteR(): Observable<any> {
    return this.http.get<PfeFile[]>(this.url+'/dpfefilewnr/57');
    
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