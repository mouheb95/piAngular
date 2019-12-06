import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PfefileHistoryService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
 url : string = "http://localhost:9080/piPfe-web/rest/pfe_files_history/" 
  constructor(private http: HttpClient) { }
 
    pfeFileHistory(pfe_file_history_id): Observable<any> {
    return this.http.get(this.url+"getPfeFileHistoryStatus/"+pfe_file_history_id);
    
    }
  }