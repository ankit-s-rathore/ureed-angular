import { FreelancerInfoComponent } from './../freelancer-info/freelancer-info.component';
import { ContractCardFreelancerComponent } from './../contract-card-freelancer/contract-card-freelancer.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractCardComponent } from './contract-card.component';

describe('ContractCardComponent', () => {
  let component: ContractCardComponent;
  let fixture: ComponentFixture<ContractCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ContractCardComponent,
        ContractCardFreelancerComponent,
        FreelancerInfoComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractCardComponent);
    component = fixture.componentInstance;
    component.freelancers = [
      {
        name: '',
        title: '',
        photo: '',
        startDate: '',
        endDate: '',
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
