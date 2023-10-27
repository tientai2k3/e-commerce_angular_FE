import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public userAPI = 'http://localhost:8080/api/admin/users';

  constructor(private http: HttpClient) {}
  getAll(): Observable<any> {
    const url = this.userAPI + '/get-all';
    return this.http.get<any>(url);
  }

  getOne(id: any): Observable<any> {
    const url = this.userAPI + '/get-one/' + id;
    return this.http.get<any>(url);
  }

  add(user: any) {
    return this.http.post<any>(`${this.userAPI}/add`, user);
  }

  update(id: any, product: any): Observable<any> {
    return this.http.put<any>(`${this.userAPI}/update/${id}`, product);
  }
  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.userAPI}/delete/${id}`);
  }
  export(): Observable<any> {
    const url = this.userAPI + '/export-excel';
    return this.http.get(url, { responseType: 'blob' });
  }
}
