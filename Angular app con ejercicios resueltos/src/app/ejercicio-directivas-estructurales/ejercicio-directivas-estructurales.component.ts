import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-directivas-estructurales',
  templateUrl: './ejercicio-directivas-estructurales.component.html',
  styleUrls: ['./ejercicio-directivas-estructurales.component.css']
})
export class EjercicioDirectivasEstructuralesComponent implements OnInit {
  public ciudadExiste: boolean = true;
  public ciudades: string[] = ['Rosario', 'Totoras', 'Funes'];

  constructor() { }

  ngOnInit() {
  }

  public agregarCiudad(ciudad: string) : void {
    this.ciudades = this.ciudades.concat(ciudad);
  }

}
