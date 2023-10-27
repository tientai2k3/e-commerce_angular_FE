import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  public colorAPI = 'http://localhost:8080/api/admin/color';
  constructor(private http: HttpClient) {}
  getAllColor(): Observable<any> {
    const url = this.colorAPI + '/get-all';
    return this.http.get<any>(url);
  }

  getOne(id: any): Observable<any> {
    const url = this.colorAPI + '/get-one/' + id;
    return this.http.get<any>(url);
  }

  addColor(color: any): Observable<any> {
    return this.http.post<any>(this.colorAPI + '/add', color);
  }

  updateColor(id: any, color: any): Observable<any> {
    return this.http.put<any>(`${this.colorAPI}/update/${id}`, color);
  }
  deleteColor(id: any): Observable<any> {
    return this.http.delete<any>(`${this.colorAPI}/delete/${id}`);
  }
}
