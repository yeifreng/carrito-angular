import { Component } from '@angular/core';
import { ApiServicioService } from '../api-servicio.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  productos:any;

  constructor(private clienteService:ApiServicioService){

    this.clienteService.obtenerProducto().subscribe( respuesta =>{
      console.log(respuesta);
      this.productos= respuesta;
    });

  }

}
