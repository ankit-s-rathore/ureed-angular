import { createAction, props } from '@ngrx/store';

export const loadIndustries = createAction(
  '[Industry Service] Load Industries'
);

export const loadIndustriesSuccess = createAction(
  '[Industry Service] Load Industries Success',
  props<{ industries: any }>()
);

export const loadIndustriesFailure = createAction(
  '[Industry Service] Load Industries Failure',
  props<{ error: any }>()
);
