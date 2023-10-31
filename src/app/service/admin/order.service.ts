import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  public orderAPI = 'http://localhost:8080/api/admin/orders';
  constructor(private http: HttpClient) {}
  getAll(page: number): Observable<any> {
    const url = this.orderAPI + '/get-all?page=' + page;
    return this.http.get<any>(url);
  }

  getOne(id: any): Observable<any> {
    const url = this.orderAPI + '/get-one/' + id;
    return this.http.get<any>(url);
  }

  getListOrderItem(id: any): Observable<any> {
    const url = this.orderAPI + '/orders-item/' + id;
    return this.http.get<any>(url);
  }
}
