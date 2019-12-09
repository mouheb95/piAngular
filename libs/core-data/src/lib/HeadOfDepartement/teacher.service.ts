import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../internshipDirector/pfe-file.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  url : string = "http://localhost:9080/piPfe-web/rest/hod" 
  constructor(private http: HttpClient) { }


  allTeacher(): Observable<any> {
    return this.http.get<Teacher[]>('http://localhost:9080/piPfe-web/rest/pfe_files/allTeacher');
    
   } 

   addNoteTeacher(teacher: Teacher): Observable<any> {

    return this.http.post(this.url+'/ajouternote', teacher, this.httpOptions);
   }
  
}
