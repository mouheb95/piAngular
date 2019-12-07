import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PfeFile } from './pfe-file.service';

@Injectable({
  providedIn: 'root'
})
export class PfeFileCancellingService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

    url : string = "http://localhost:9080/piPfe-web/rest/pfeFileCancelling" 
  constructor(private http: HttpClient) { }

  findallallPfeFileCancelling(): Observable<any> {
    //let profile = student.profile;
    return this.http.get<PfeFileCancellingRequest[]>(this.url+'/allPfeFileCancelling');
   } 
   refusePfeFileCancellingRequest(pfeFileCancellingRequest: PfeFileCancellingRequest): Observable<any> {

    return this.http.post(this.url+'/refusePfeCancelling?idpfefileCancelling='+pfeFileCancellingRequest.id, pfeFileCancellingRequest, this.httpOptions);
   }
   
   acceptPfeFileCancellingRequest(pfeFileCancellingRequest: PfeFileCancellingRequest): Observable<any> {

    return this.http.post(this.url+'/validatePfeCancelling?idpfefileCancelling='+pfeFileCancellingRequest.id, pfeFileCancellingRequest, this.httpOptions);
   }

}

export interface PfeFileCancellingRequest {
  constructor(id: string, cause: string, status: number, pfeFile: PfeFile)
  id: String;  
  cause: String;  
  status: number; 
  pfeFile: PfeFile; 

}
