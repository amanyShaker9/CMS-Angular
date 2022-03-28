import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientServiceComponent } from './edit-client-service.component';

describe('EditClientServiceComponent', () => {
  let component: EditClientServiceComponent;
  let fixture: ComponentFixture<EditClientServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClientServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClientServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
