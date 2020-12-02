import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAccountCardComponent } from './business-account-card.component';

describe('BusinessAccountCardComponent', () => {
  let component: BusinessAccountCardComponent;
  let fixture: ComponentFixture<BusinessAccountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessAccountCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessAccountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
