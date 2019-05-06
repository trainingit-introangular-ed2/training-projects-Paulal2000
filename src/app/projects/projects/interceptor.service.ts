import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(private store: StoreService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.store.notifica(this.notifica(req));

    return next.handle(req);
  }

  private notifica(req: HttpRequest<any>) {
    return 'Accediendo a ' + req.url + ' en la fecha ' + new Date();
  }
}
