import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class TokenCookiesService {
  constructor(private cookieService: CookieService) {}

  public setToken(token: string) {
    // Lưu token vào cookies với tên 'myToken'
    this.cookieService.set('myToken', token);
  }

  public getToken(): string {
    // Lấy token từ cookies
    return this.cookieService.get('myToken');
  }

  public deleteToken() {
    // Xóa token từ cookies
    this.cookieService.delete('myToken');
  }
}
