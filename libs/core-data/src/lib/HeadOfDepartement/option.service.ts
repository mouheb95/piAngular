import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Option } from './Option';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  url : string = "http://localhost:9080/piPfe-web/rest/hod" 
  constructor(private http: HttpClient) { }


   getAllOptions(currentUser_id): Observable<any> {
    return this.http.get<Option[]>(this.url+'/getops/'+currentUser_id);
    
   } 


   addOption(option: Option,currentUser_id): Observable<any> {

    return this.http.post(this.url+'/addop/'+currentUser_id, option, this.httpOptions);
   }


   getOptionById(idOption) {
    return this.http.get<Option[]>(this.url+'/getop/'+idOption);
    
   }


   updateOption(option: Option,currentUser_id): Observable<any> {

    return this.http.post(this.url+'/updateop/'+currentUser_id, option, this.httpOptions);
   }

   deleteOption(id): Observable<any> {

    return this.http.delete(this.url+'/deleteop/'+id);
   }

}
