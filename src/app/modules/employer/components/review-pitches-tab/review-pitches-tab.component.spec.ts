import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPitchesTabComponent } from './review-pitches-tab.component';

describe('ReviewPitchesTabComponent', () => {
  let component: ReviewPitchesTabComponent;
  let fixture: ComponentFixture<ReviewPitchesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewPitchesTabComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPitchesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
