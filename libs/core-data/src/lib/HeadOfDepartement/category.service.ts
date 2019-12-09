import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  url : string = "http://localhost:9080/piPfe-web/rest/hod" 
  constructor(private http: HttpClient) { }

  
  allCategory(): Observable<any> {
    return this.http.get<Category[]>(this.url+'/getAllCateg');
    
   }

   CategoryValide(): Observable<any> {
    return this.http.get<Category[]>(this.url+'/getAllCategValid');
    
   }

   CategoryNonValide(): Observable<any> {
    return this.http.get<Category[]>(this.url+'/getAllCategNonValid');
    
   }

   ValidateCategory(category): Observable<any> {

    return this.http.post(this.url+'/validercat/'+category, this.httpOptions);
   }
}
