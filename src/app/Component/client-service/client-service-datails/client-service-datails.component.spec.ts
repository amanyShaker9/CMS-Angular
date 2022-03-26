import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientServiceDatailsComponent } from './client-service-datails.component';

describe('ClientServiceDatailsComponent', () => {
  let component: ClientServiceDatailsComponent;
  let fixture: ComponentFixture<ClientServiceDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientServiceDatailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientServiceDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
