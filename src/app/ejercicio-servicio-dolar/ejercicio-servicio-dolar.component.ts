import { Component, OnInit } from '@angular/core';
import { DolarService } from './dolar.service';
import { Dolar } from './dolar';

@Component({
  selector: 'app-ejercicio-servicio-dolar',
  templateUrl: './ejercicio-servicio-dolar.component.html',
  styleUrls: ['./ejercicio-servicio-dolar.component.css']
})
export class EjercicioServicioDolarComponent implements OnInit {
  public dolarActual: Dolar;

  constructor(private dolarService: DolarService) { }

  ngOnInit() {
    this.dolarService.getDolar()
      .subscribe(
        (response: Dolar) => {
          this.dolarActual = response;
        }, (error) => {
          console.error(error.message);
        });
  }

  public colorPorcentaje(): string {
    return this.dolarActual.porcentajeVariacion24horas >= 0 ? 'green' : 'red';
  }

}
