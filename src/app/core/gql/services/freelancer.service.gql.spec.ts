import { TestBed } from '@angular/core/testing';

import { FreelancerServiceGql } from './freelancer.service.gql';

describe('FreelancerService', () => {
  let service: FreelancerServiceGql;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreelancerServiceGql);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
