import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';

import { DashboardEffects } from './dashboard.effects';

describe('DashboardEffects', () => {
  let actions$: Observable<any>;
  let effects: DashboardEffects;
  const initialState = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DashboardEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
      ],
    });

    effects = TestBed.inject(DashboardEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
