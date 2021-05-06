import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorraPizzaComponent } from './borra-pizza.component';

describe('BorraPizzaComponent', () => {
  let component: BorraPizzaComponent;
  let fixture: ComponentFixture<BorraPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorraPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorraPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
