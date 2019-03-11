import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioPipesComponent } from './ejercicio-pipes.component';

describe('EjercicioPipesComponent', () => {
  let component: EjercicioPipesComponent;
  let fixture: ComponentFixture<EjercicioPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjercicioPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
