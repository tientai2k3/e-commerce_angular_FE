import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  public orderAPI = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient, private cartService: CartService) {}

  add(order: any) {
    return this.http.post<any>(`${this.orderAPI}/checkout`, order);
  }

  getAll(id: any): Observable<any> {
    const url = this.orderAPI + '/myhistory/' + id;
    return this.http.get<any>(url);
  }

  getOne(id: any): Observable<any> {
    const url = this.orderAPI + '/myhistory/get-one/' + id;
    return this.http.get<any>(url);
  }

  getListOrderItem(id: any): Observable<any> {
    const url = this.orderAPI + '/myhistory/orders-item/' + id;
    return this.http.get<any>(url);
  }
}
