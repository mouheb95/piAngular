import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PfeFile } from './Pfefile';

@Injectable({
  providedIn: 'root'
})
export class teacherfileService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

 url : string = "http://localhost:9383/piPfe-web/rest/fileTeacher/" 
  constructor(private http: HttpClient) { }

  getRapport(): Observable<any> {
    return this.http.get<PfeFile[]>(this.url+'getRapport?id=1');
   }

   getFramer(): Observable<any> {
    return this.http.get<PfeFile[]>(this.url+'getFramer?id=1');
   }

   getValidator(): Observable<any> {
    return this.http.get<PfeFile[]>(this.url+'getValidator?id=1');
   }

   valider(id,vv): Observable<any> {
    return this.http.put(this.url+"valider?id="+id+"&valid="+vv, this.httpOptions);
   }

   giveNoteFramer(id,vv): Observable<any> {
    return this.http.put(this.url+"giveNoteFramer?id="+id+"&note="+vv, this.httpOptions);
   }

   giveNoteReporter(id,vv): Observable<any> {
    return this.http.put(this.url+"giveNoteReporter?id="+id+"&note="+vv, this.httpOptions);
   }

   setModif(id,vv): Observable<any> {
    return this.http.put(this.url+"setModif?id="+id+"&modif="+vv, this.httpOptions);
   }





  createCat(cat): Observable<any> {
    return this.http.post(this.url+"addCat?name="+ cat.name, this.httpOptions);
   }

  deleteCat(cat): Observable<{}>
  {
    return this.http.delete(this.url+"delCat?id="+cat.id);
  }
   
}