import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AdminInterceptor implements HttpInterceptor {
  token:any=localStorage.getItem('token')

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler):Observable<HttpEvent<unknown>> {
    if(this.token){
      request=request.clone({
        setHeaders:{Authorization:`Bearer ${this.token}`,
      }

      })

    
  }
    return next.handle(request);
  }
}
