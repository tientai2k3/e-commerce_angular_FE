import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public url = 'http://localhost:8080/api/auth/';

  constructor(private http: HttpClient) {}

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      this.url + 'signup',
      { username, email, password },
      httpOptions
    );
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(
      this.url + 'signin',
      { username, password },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(this.url + 'logout', {}, httpOptions);
  }
}
