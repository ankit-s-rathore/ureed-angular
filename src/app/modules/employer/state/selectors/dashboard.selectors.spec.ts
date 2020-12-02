import { EmployerState } from '..';
import * as featureKeys from '../feature-keys';
import {
  selectDashboardState,
  selectEmployerState,
} from './dashboard.selectors';
import * as fromDashboard from '../reducers/dashboard.reducer';

describe('Dashboard Selectors', () => {
  it('should select the feature state', () => {
    const result: EmployerState = selectEmployerState({
      router: { state: '', navigationId: 1 },
      [featureKeys.employerFeatureKey]: {
        [featureKeys.dashboardFeatureKey]: {
          showPostProjectModal: false,
        },
      },
    });

    expect(result).toEqual({
      [featureKeys.dashboardFeatureKey]: {
        showPostProjectModal: false,
      },
    });
  });

  it('should select the dashboard state', () => {
    const result: fromDashboard.State = selectDashboardState({
      router: { state: '', navigationId: 1 },
      [featureKeys.employerFeatureKey]: {
        [featureKeys.dashboardFeatureKey]: {
          showPostProjectModal: false,
        },
      },
    });

    expect(result).toEqual({
      showPostProjectModal: false,
    });
  });
});
