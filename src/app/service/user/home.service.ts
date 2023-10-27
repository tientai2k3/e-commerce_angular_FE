import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public productAPI = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}
  getAll(): Observable<any> {
    const url = this.productAPI + '/home';
    return this.http.get<any>(url);
  }

  productAll(): Observable<any> {
    const url = this.productAPI + '/product';
    return this.http.get<any>(url);
  }

  getOne(id: any): Observable<any> {
    const url = this.productAPI + '/product/' + id;
    return this.http.get<any>(url);
  }
}
