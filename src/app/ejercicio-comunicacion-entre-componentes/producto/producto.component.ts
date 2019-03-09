import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() producto;
  @Output() nombreProductoAComprar = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public comprarProducto(nombre: string) {
    this.nombreProductoAComprar.emit(nombre);
  }

}
