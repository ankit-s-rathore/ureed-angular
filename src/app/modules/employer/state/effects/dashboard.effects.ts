import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { IndustryService } from '@services';
import { of } from 'rxjs';
import {
  catchError,
  filter,
  map,
  mergeMap,
  withLatestFrom,
} from 'rxjs/operators';

import { selectIndustries } from '../selectors';
import * as dashboardActions from './../actions/dashboard.actions';
import * as industryServiceActions from './../actions/industry-service.actions';

@Injectable()
export class DashboardEffects {
  openPostProjectModal$ = createEffect(() =>
    this._actions$.pipe(
      ofType(dashboardActions.openPostProjectModal),
      mergeMap(() => of(industryServiceActions.loadIndustries()))
    )
  );

  loadIndustries$ = createEffect(() =>
    this._actions$.pipe(
      ofType(industryServiceActions.loadIndustries),
      withLatestFrom(this._store.select(selectIndustries)),
      filter((_, industries) => !industries),
      mergeMap(() =>
        this._industryService.getIndustries().pipe(
          map(industries =>
            industryServiceActions.loadIndustriesSuccess({ industries })
          ),
          catchError(error =>
            of(industryServiceActions.loadIndustriesFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private _actions$: Actions,
    private _industryService: IndustryService,
    private _store: Store
  ) {}
}
