import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-comunicacion-entre-componentes',
  templateUrl: './ejercicio-comunicacion-entre-componentes.component.html',
  styleUrls: ['./ejercicio-comunicacion-entre-componentes.component.css']
})
export class EjercicioComunicacionEntreComponentesComponent {
  public listadoProductos = [
    {
      nombre: 'Fuente',
      precio: 1000
    },
    {
      nombre: 'Memoria RAM',
      precio: 523
    },
    {
      nombre: 'Placa de video',
      precio: 11200.25
    }
  ];

  public productoSeleccionado;
  public nombreProductoAComprar;

  public seleccion(producto) {
    this.productoSeleccionado = producto;
  }

  public comprarProducto(nombre) {
    this.nombreProductoAComprar = nombre;
  }

}
