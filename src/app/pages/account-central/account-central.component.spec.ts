import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCentralComponent } from './account-central.component';

describe('AccountCentralComponent', () => {
  let component: AccountCentralComponent;
  let fixture: ComponentFixture<AccountCentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCentralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
