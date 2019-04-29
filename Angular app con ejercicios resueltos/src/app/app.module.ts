import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjercicioEnlaceDeDatosComponent } from './ejercicio-enlace-de-datos/ejercicio-enlace-de-datos.component';
import { EjercicioDirectivasEstructuralesComponent } from './ejercicio-directivas-estructurales/ejercicio-directivas-estructurales.component';
import { EjercicioComunicacionEntreComponentesComponent } from './ejercicio-comunicacion-entre-componentes/ejercicio-comunicacion-entre-componentes.component';
import { ProductoComponent } from './ejercicio-comunicacion-entre-componentes/producto/producto.component';
import { EjercicioPipesComponent } from './ejercicio-pipes/ejercicio-pipes.component';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { EjercicioServicioDolarComponent } from './ejercicio-servicio-dolar/ejercicio-servicio-dolar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EjercicioEnlaceDeDatosComponent,
    EjercicioDirectivasEstructuralesComponent,
    EjercicioComunicacionEntreComponentesComponent,
    ProductoComponent,
    EjercicioPipesComponent,
    HomeComponent,
    NoEncontradoComponent,
    EjercicioServicioDolarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
