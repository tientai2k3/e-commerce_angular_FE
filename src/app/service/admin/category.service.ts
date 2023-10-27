import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  public categoryAPI = 'http://localhost:8080/api/admin/category';
  constructor(private http: HttpClient) {}
  getAll(): Observable<any> {
    const url = this.categoryAPI + '/get-all';
    return this.http.get<any>(url);
  }

  getOne(id: any): Observable<any> {
    const url = this.categoryAPI + '/get-one/' + id;
    return this.http.get<any>(url);
  }

  add(category: any): Observable<any> {
    return this.http.post<any>(this.categoryAPI + '/add', category);
  }

  update(id: any, category: any): Observable<any> {
    return this.http.put<any>(`${this.categoryAPI}/update/${id}`, category);
  }
  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.categoryAPI}/delete/${id}`);
  }
}
