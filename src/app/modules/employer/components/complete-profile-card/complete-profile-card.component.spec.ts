import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteProfileCardComponent } from './complete-profile-card.component';

describe('CompleteProfileCardComponent', () => {
  let component: CompleteProfileCardComponent;
  let fixture: ComponentFixture<CompleteProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompleteProfileCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
