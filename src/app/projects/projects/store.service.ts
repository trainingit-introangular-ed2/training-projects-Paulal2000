import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private mensajeActual$ = new BehaviorSubject<any>([]);

  constructor() {}

  public select$ = () => this.mensajeActual$.asObservable();

  public notifica(mensaje) {
    this.mensajeActual$.next(mensaje);
  }
}
