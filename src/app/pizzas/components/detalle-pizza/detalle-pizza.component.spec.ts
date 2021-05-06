import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePizzaComponent } from './detalle-pizza.component';

describe('DetallePizzaComponent', () => {
  let component: DetallePizzaComponent;
  let fixture: ComponentFixture<DetallePizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
