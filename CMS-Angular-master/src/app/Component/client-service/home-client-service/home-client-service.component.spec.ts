import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClientServiceComponent } from './home-client-service.component';

describe('HomeClientServiceComponent', () => {
  let component: HomeClientServiceComponent;
  let fixture: ComponentFixture<HomeClientServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeClientServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeClientServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
