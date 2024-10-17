import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private tokenStorage: TokenStorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = req;

    // Get the token from the TokenStorageService
    const token = this.tokenStorage.getToken();

    // If the token exists, clone the request and add the token to the Authorization header
    if (token != null) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
    }

    // Pass the modified request to the next handler
    return next.handle(authReq);
  }
}
