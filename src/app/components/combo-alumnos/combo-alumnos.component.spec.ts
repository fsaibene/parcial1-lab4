import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboAlumnosComponent } from './combo-alumnos.component';

describe('ComboAlumnosComponent', () => {
  let component: ComboAlumnosComponent;
  let fixture: ComponentFixture<ComboAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboAlumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
