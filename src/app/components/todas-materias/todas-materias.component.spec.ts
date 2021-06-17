import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasMateriasComponent } from './todas-materias.component';

describe('TodasMateriasComponent', () => {
  let component: TodasMateriasComponent;
  let fixture: ComponentFixture<TodasMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodasMateriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodasMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
