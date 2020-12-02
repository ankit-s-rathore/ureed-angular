import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerInfoComponent } from './freelancer-info.component';

describe('FreelancerInfoComponent', () => {
  let component: FreelancerInfoComponent;
  let fixture: ComponentFixture<FreelancerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreelancerInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerInfoComponent);
    component = fixture.componentInstance;
    component.freelancer = {
      name: '',
      photo: '',
      title: '',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
