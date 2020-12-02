import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FreelancerInfoComponent } from '../freelancer-info/freelancer-info.component';

import { ContractCardFreelancerComponent } from './contract-card-freelancer.component';

describe('ContractCardFreelancerComponent', () => {
  let component: ContractCardFreelancerComponent;
  let fixture: ComponentFixture<ContractCardFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractCardFreelancerComponent, FreelancerInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractCardFreelancerComponent);
    component = fixture.componentInstance;
    component.freelancer = {
      name: '',
      title: '',
      photo: '',
      startDate: '',
      endDate: '',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
