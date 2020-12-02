import { TestBed } from '@angular/core/testing';

import { IndustryServiceGql } from './industry.service.gql';

describe('IndustryService', () => {
  let service: IndustryServiceGql;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndustryServiceGql);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
