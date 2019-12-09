import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
 url : string = "http://localhost:9383/piPfe-web/rest/categoryProp/" 
  constructor(private http: HttpClient) { }

  findall(): Observable<any> {
    return this.http.get<Category[]>(this.url+'allCat');
   }

   createCat(cat): Observable<any> {
    return this.http.post(this.url+"addCat?name="+ cat.name, this.httpOptions);
   }

   deleteCat(cat): Observable<{}>
  {
    return this.http.delete(this.url+"delCat?id="+cat.id);
  }
   
}