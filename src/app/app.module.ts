import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjercicioEnlaceDeDatosComponent } from './ejercicio-enlace-de-datos/ejercicio-enlace-de-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    EjercicioEnlaceDeDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
