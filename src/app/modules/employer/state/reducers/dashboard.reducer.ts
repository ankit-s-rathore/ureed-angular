// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createReducer, on } from '@ngrx/store';

import * as dashboardActions from '../actions/dashboard.actions';
import * as industryServiceActions from '../actions/industry-service.actions';

export interface State {
  showPostProjectModal?: boolean;
  isLoadingIndustries?: boolean;
  errorMessage?: string;
  industries?: any[];
}

export const initialState: State = {
  showPostProjectModal: false,
};

export const reducer = createReducer(
  initialState,

  on(dashboardActions.openPostProjectModal, state => ({
    ...state,
    showPostProjectModal: true,
  })),

  on(dashboardActions.closePostProjectModal, state => ({
    ...state,
    showPostProjectModal: false,
  })),

  on(industryServiceActions.loadIndustries, state => ({
    ...state,
    isLoadingIndustries: true,
  })),

  on(industryServiceActions.loadIndustriesSuccess, (state, { industries }) => ({
    ...state,
    isLoadingIndustries: false,
    industries,
  })),

  on(industryServiceActions.loadIndustriesFailure, (state, { error }) => ({
    ...state,
    isLoadingIndustries: false,
    errorMessage: error.message,
  }))
);
