import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenCookiesService } from './tokenCookies.service';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
  constructor(private tokenCookiesService: TokenCookiesService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.tokenCookiesService.getToken();

    if (token) {
      // Thêm Authorization header
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}
