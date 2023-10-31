import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public productAPI = 'http://localhost:8080/api/admin/products';
  constructor(private http: HttpClient) {}
  getAll(): Observable<any> {
    const url = this.productAPI + '/get-all';
    return this.http.get<any>(url);
  }

  getOne(id: any): Observable<any> {
    const url = this.productAPI + '/get-one/' + id;
    return this.http.get<any>(url);
  }

  // add(productData: any, base64Image: string) {
  //   // Truyền cả dữ liệu sản phẩm và hình ảnh base64 vào request
  //   const data = { ...productData, image: base64Image };

  //   return this.http.post<any>(`${this.productAPI}/add`, data);
  // }
  add(product: any) {
    return this.http.post<any>(`${this.productAPI}/add`, product);
  }
  addImage(id: any, image: any) {
    const formData = new FormData();
    formData.append('multipartFile', image);
    return this.http.post<any>(`${this.productAPI}/addImage/${id}`, formData);
  }

  update(id: any, product: any): Observable<any> {
    return this.http.put<any>(`${this.productAPI}/update/${id}`, product);
  }
  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.productAPI}/delete/${id}`);
  }

  export(): Observable<any> {
    const url = this.productAPI + '/export-excel';
    return this.http.get(url, { responseType: 'blob' });
  }
}
