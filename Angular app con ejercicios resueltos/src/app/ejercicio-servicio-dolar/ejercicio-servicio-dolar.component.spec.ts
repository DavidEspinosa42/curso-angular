import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioServicioDolarComponent } from './ejercicio-servicio-dolar.component';

describe('EjercicioServicioDolarComponent', () => {
  let component: EjercicioServicioDolarComponent;
  let fixture: ComponentFixture<EjercicioServicioDolarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjercicioServicioDolarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioServicioDolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
