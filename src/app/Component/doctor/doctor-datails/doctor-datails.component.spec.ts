import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDatailsComponent } from './doctor-datails.component';

describe('DoctorDatailsComponent', () => {
  let component: DoctorDatailsComponent;
  let fixture: ComponentFixture<DoctorDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorDatailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
