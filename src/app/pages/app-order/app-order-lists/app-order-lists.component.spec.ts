import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOrderListsComponent } from './app-order-lists.component';

describe('AppOrderListsComponent', () => {
  let component: AppOrderListsComponent;
  let fixture: ComponentFixture<AppOrderListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppOrderListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOrderListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
