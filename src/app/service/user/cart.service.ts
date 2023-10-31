import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartAPI = 'http://localhost:8080/api/user/cart';

  constructor(private http: HttpClient) {}
  public cartSizeSubject = new BehaviorSubject<number>(0);
  cartSize$ = this.cartSizeSubject.asObservable();
  getAllByUser(id: any): Observable<any> {
    const url = this.cartAPI + '/' + id;
    return this.http.get<any>(url).pipe(
      tap((cart) => {
        this.cartSizeSubject.next(cart.length); // Cập nhật giỏ hàng sau khi lấy dữ liệu
      })
    );
  }

  // getOne(id: any): Observable<any> {
  //   const url = this.cartAPI + '/get-one/' + id;
  //   return this.http.get<any>(url);
  // }

  add(id: any, cart: any) {
    return this.http.post<any>(`${this.cartAPI}/add/${id}`, cart).pipe(
      tap(() => {
        // Sau khi thêm sản phẩm thành công, cập nhật kích thước giỏ hàng
        this.cartSizeSubject.next(this.cartSizeSubject.value + 1);
      })
    );
  }

  // update(intCart: any, idProduct: any, cart: any): Observable<any> {
  //   return this.http.put<any>(
  //     `${this.cartAPI}/update?${intCart}&${idProduct}`,
  //     cart
  //   );
  // }
  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.cartAPI}/delete/${id}`).pipe(
      tap(() => {
        // Sau khi xóa sản phẩm thành công, cập nhật kích thước giỏ hàng
        this.cartSizeSubject.next(this.cartSizeSubject.value - 1);
      })
    );
  }

  update(id: any, request: any): Observable<any> {
    return this.http.put<any>(`${this.cartAPI}/update/${id}`, request);
  }
}
