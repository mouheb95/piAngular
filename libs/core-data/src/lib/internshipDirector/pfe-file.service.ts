import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PfeFileService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  url : string = "http://localhost:9080/piPfe-web/rest/pfe_files" 
  constructor(private http: HttpClient) { }
 
  findall(): Observable<any> {
   //let profile = student.profile;
   return this.http.get<PfeFile[]>(this.url+'/allPfeFile');
   
  } 

  validatePfeFile(pfefile: PfeFile): Observable<any> {

    return this.http.post(this.url+'/validatePFE?idpfefile='+pfefile.id, pfefile, this.httpOptions);
   }
   
   
   fetPfeFileByID(idpfefile: number) {

    return this.http.get(this.url+'/PfeFileByID/?idpfefile='+idpfefile);
   }

   affectationReporter(raporteurId: number, pfefile: PfeFile) {

    return this.http.post(this.url+'/affecterRaporteur?raporteurId='+raporteurId+'&PfeFileId='+pfefile.id, pfefile, this.httpOptions);
   }

   getallTeacher(): Observable<any> {
    return this.http.get<Teacher[]>(this.url+'/allTeacher');
    
   }

   getTeacherByID(id: number) {

    return this.http.get(this.url+'/TeacherByID/?id='+id);
   }

   getPfefileByYear(): Observable<any> {
    return this.http.get<PfeFile[]>(this.url+'/PfeFileCurrentYear/2019');
    
   }

   getPfefileNotTreated(): Observable<any> {
    return this.http.get<PfeFile[]>(this.url+'/PfeNtrait/2019');
    
   }

   refusePfeFile(pfefile: PfeFile): Observable<any> {

    return this.http.post(this.url+'/refusePFE?idpfefile='+pfefile.id, pfefile, this.httpOptions);
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