import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioComunicacionEntreComponentesComponent } from './ejercicio-comunicacion-entre-componentes.component';

describe('EjercicioComunicacionEntreComponentesComponent', () => {
  let component: EjercicioComunicacionEntreComponentesComponent;
  let fixture: ComponentFixture<EjercicioComunicacionEntreComponentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjercicioComunicacionEntreComponentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioComunicacionEntreComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
