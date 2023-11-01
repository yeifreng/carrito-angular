import { Component } from '@angular/core';
import { ApiServicioService } from '../api-servicio.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  productos:any;

  indiceUno:number[];

  cantidadProducto:number = 0;

  constructor(private clienteService:ApiServicioService){

    this.clienteService.obtenerProducto().subscribe( respuesta =>{
      console.log(respuesta);
      this.productos= respuesta;
    });

  }

  aumentar(){
    this.cantidadProducto = this.cantidadProducto + 1;
    console.log(this.indiceUno);
  }

  disminuir(){
    if(this.cantidadProducto !== 0){
      this.cantidadProducto = this.cantidadProducto - 1;
    }
    
  }

}
