import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioEnlaceDeDatosComponent } from './ejercicio-enlace-de-datos.component';

describe('EjercicioEnlaceDeDatosComponent', () => {
  let component: EjercicioEnlaceDeDatosComponent;
  let fixture: ComponentFixture<EjercicioEnlaceDeDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjercicioEnlaceDeDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioEnlaceDeDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
