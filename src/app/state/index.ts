/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable no-console */
import { environment } from '@environment';
import * as fromRouter from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer,
} from '@ngrx/store';

export interface State {
  router: fromRouter.RouterReducerState<any>;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
};

export const selectRouter = createFeatureSelector<
  State,
  fromRouter.RouterReducerState<any>
>('router');

export const {
  selectCurrentRoute, // select the current route
  selectFragment, // select the current route fragment
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl, // select the current url
} = fromRouter.getSelectors(selectRouter);

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action): any => {
    const result = reducer(state, action);

    // tslint:disable-next-line: no-console
    console.groupCollapsed(action.type);
    // tslint:disable-next-line: no-console
    console.log('prev state', state);
    // tslint:disable-next-line: no-console
    console.log('action', action);
    // tslint:disable-next-line: no-console
    console.log('next state', result);
    // tslint:disable-next-line: no-console
    console.groupEnd();

    return result;
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];
