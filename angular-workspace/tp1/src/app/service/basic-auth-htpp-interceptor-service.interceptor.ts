import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BasicAuthHtppInterceptorServiceInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = sessionStorage.getItem('token');
    if (sessionStorage.getItem('token') ) {
      const headers = new HttpHeaders({
        'Authorization': sessionStorage.getItem('token')!,
        //'Access-Control-Allow-Credentials': 'true'
      });
      request = request.clone({headers})
    }
    return next.handle(request);
  }
}
