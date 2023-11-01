import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ApiServicioService {

  url:string = 'http://localhost:4200/assets/api.json';

  constructor(private clienteHttp:HttpClient) { }

  obtenerProducto():Observable<Producto[]>{
    return this.clienteHttp.get<Producto[]>(this.url)
    }
}
