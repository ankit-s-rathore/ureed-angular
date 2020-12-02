import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  group,
  animate,
} from '@angular/animations';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromEmployer from '../../state';
import * as DashboardActions from '../../state/actions/dashboard.actions';

@Component({
  selector: 'ureed-my-projects-tab',
  templateUrl: './my-projects-tab.component.html',
  styleUrls: ['./my-projects-tab.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ height: '*', opacity: 0 })),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),

        group([
          animate(300, style({ height: 0 })),
          animate('200ms ease-in-out', style({ opacity: '0' })),
        ]),
      ]),
      transition(':enter', [
        style({ height: '0', opacity: 0 }),

        group([
          animate(300, style({ height: '*' })),
          animate('400ms ease-in-out', style({ opacity: '1' })),
        ]),
      ]),
    ]),
  ],
})
export class MyProjectsTabComponent implements OnInit {
  isActiveProjects = true;
  isDraftProjects = true;
  isCloseProjects = true;
  industries$: Observable<any[] | undefined>;
  showPostProjectModal$: Observable<boolean | undefined>;
  itemsStatus = [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'Active',
    },
    {
      id: 3,
      name: 'Drafted',
    },
    {
      id: 4,
      name: 'Completed',
    },
  ];

  itemsVisibility = [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'Private',
    },
    {
      id: 3,
      name: 'Public',
    },
  ];

  itemsType = [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'Fixed budget',
    },
    {
      id: 3,
      name: 'Hourly rated',
    },
  ];

  constructor(private _store: Store) {}

  ngOnInit(): void {
    this.showPostProjectModal$ = this._store.pipe(
      select(fromEmployer.selectShowPostProjectModal)
    );
    this.industries$ = this._store.pipe(select(fromEmployer.selectIndustries));
  }

  openPostProjectModal(): void {
    this._store.dispatch(DashboardActions.openPostProjectModal());
  }

  closePostProjectModal(): void {
    this._store.dispatch(DashboardActions.closePostProjectModal());
  }

  createProject(): void {
    // TODO: add the submit logic
    this._store.dispatch(DashboardActions.closePostProjectModal());
  }
}
