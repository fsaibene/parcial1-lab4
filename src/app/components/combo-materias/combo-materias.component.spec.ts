import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboMateriasComponent } from './combo-materias.component';

describe('ComboMateriasComponent', () => {
  let component: ComboMateriasComponent;
  let fixture: ComponentFixture<ComboMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboMateriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
