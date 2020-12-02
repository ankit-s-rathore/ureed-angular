import { Action, combineReducers } from '@ngrx/store';
import * as fromRoot from '@ureed/state';
import * as featureKeys from './feature-keys';
import * as fromDashboard from './reducers/dashboard.reducer';

export * from './selectors';
export * from './effects';

export interface EmployerState {
  [featureKeys.dashboardFeatureKey]: fromDashboard.State;
}

// Extends the app state to include the employer feature.
// This is required because employer feature is lazy loaded.
// So the reference to State cannot be added to root state directly.
export interface State extends fromRoot.State {
  [featureKeys.employerFeatureKey]: EmployerState;
}

/** Provide reducer in AoT-compilation happy way */
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function reducers(state: EmployerState, action: Action) {
  return combineReducers({
    [featureKeys.dashboardFeatureKey]: fromDashboard.reducer,
  })(state, action);
}
