import * as fromIndustryService from './industry-service.actions';

describe('Industry Service Actions', () => {
  it('should return a load industries action', () => {
    expect(fromIndustryService.loadIndustries().type).toBe(
      '[Industry Service] Load Industries'
    );
  });

  it('should return a load industries success action', () => {
    expect(
      fromIndustryService.loadIndustriesSuccess({ industries: '' }).type
    ).toBe('[Industry Service] Load Industries Success');
  });

  it('should return a load industries failure action', () => {
    expect(fromIndustryService.loadIndustriesFailure({ error: '' }).type).toBe(
      '[Industry Service] Load Industries Failure'
    );
  });
});
