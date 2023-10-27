import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  public orderAPI = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) {}
  // getAllByUser(id: any): Observable<any> {
  //   const url = this.cartAPI + '/checkout' + id;
  //   return this.http.get<any>(url);
  // }

  // getOne(id: any): Observable<any> {
  //   const url = this.cartAPI + '/get-one/' + id;
  //   return this.http.get<any>(url);
  // }

  add(order: any) {
    return this.http.post<any>(`${this.orderAPI}/checkout`, order);
  }

  // update(intCart: any, idProduct: any, cart: any): Observable<any> {
  //   return this.http.put<any>(
  //     `${this.cartAPI}/update?${intCart}&${idProduct}`,
  //     cart
  //   );
  // }
  // delete(id: any): Observable<any> {
  //   return this.http.delete<any>(`${this.cartAPI}/delete/${id}`);
  // }

  // update(id: any, request: any): Observable<any> {
  //   return this.http.put<any>(`${this.cartAPI}/update/${id}`, request);
  // }
}
