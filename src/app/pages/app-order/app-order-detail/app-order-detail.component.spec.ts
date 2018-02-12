import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOrderDetailComponent } from './app-order-detail.component';

describe('AppOrderDetailComponent', () => {
  let component: AppOrderDetailComponent;
  let fixture: ComponentFixture<AppOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
