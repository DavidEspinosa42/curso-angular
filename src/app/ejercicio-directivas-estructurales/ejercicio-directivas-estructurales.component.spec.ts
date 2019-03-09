import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioDirectivasEstructuralesComponent } from './ejercicio-directivas-estructurales.component';

describe('EjercicioDirectivasEstructuralesComponent', () => {
  let component: EjercicioDirectivasEstructuralesComponent;
  let fixture: ComponentFixture<EjercicioDirectivasEstructuralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjercicioDirectivasEstructuralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioDirectivasEstructuralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
