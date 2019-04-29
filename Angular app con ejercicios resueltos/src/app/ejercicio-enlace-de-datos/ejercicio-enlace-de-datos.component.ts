import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-enlace-de-datos',
  templateUrl: './ejercicio-enlace-de-datos.component.html',
  styleUrls: ['./ejercicio-enlace-de-datos.component.css']
})
export class EjercicioEnlaceDeDatosComponent implements OnInit {
  public nombre: string = 'David';
  public ciudad: string = 'Rosario';
  public esconderCiudad: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public visibilidadCiudad() : void {
    this.esconderCiudad = !this.esconderCiudad;
  }

}
