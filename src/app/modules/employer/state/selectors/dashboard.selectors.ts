import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EmployerState, State } from '..';
import * as featureKeys from '../feature-keys';

export const selectEmployerState = createFeatureSelector<State, EmployerState>(
  featureKeys.employerFeatureKey
);

export const selectDashboardState = createSelector(
  selectEmployerState,
  state => state[featureKeys.dashboardFeatureKey]
);

export const selectShowPostProjectModal = createSelector(
  selectDashboardState,
  state => state.showPostProjectModal
);

export const selectIsLoadingIndustries = createSelector(
  selectDashboardState,
  state => state.isLoadingIndustries
);

export const selectIndustries = createSelector(
  selectDashboardState,
  state => state.industries
);

export const selectErrorMessage = createSelector(
  selectDashboardState,
  state => state.errorMessage
);
