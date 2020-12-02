import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromEmployer from '../../state';
import * as DashboardActions from '../../state/actions/dashboard.actions';

@Component({
  selector: 'ureed-employer-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  industries$: Observable<any[] | undefined>;
  showPostProjectModal$: Observable<boolean | undefined>;

  contractFreelancers: any[] = [
    {
      name: 'Arnoldo M.',
      photo:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      timezone: 'London, UK (GMT +1)',
      ratePerHour: '15',
      hoursPerWeek: '40',
      startDate: '15/10',
      endDate: '',
      isPro: true,
    },
    {
      name: 'Jane M.',
      photo:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      timezone: 'London, UK (GMT +1)',
      ratePerHour: '15',
      hoursPerWeek: '40',
      startDate: '15/10',
      endDate: '',
      isPro: false,
    },
  ];

  freelancersInTabs: any[] = [
    {
      name: 'Arnoldo M.',
      title: 'Product Manager',
      photo:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      timezone: 'London, UK (GMT +1)',
      isPro: true,
    },
    {
      name: 'Jane M.',
      title: 'Software Develper',
      photo:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      timezone: 'London, UK (GMT +1)',
      isPro: false,
    },
    {
      name: 'Ahmed M.',
      title: 'Product Manager and UX',
      photo:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      timezone: 'London, UK (GMT +1)',
      isPro: true,
    },
    {
      name: 'Ahmed M.',
      title: 'Product Manager and UX',
      photo:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      timezone: 'London, UK (GMT +1)',
      isPro: true,
    },
    {
      name: 'Ahmed M.',
      title: 'Product Manager and UX',
      photo:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      timezone: 'London, UK (GMT +1)',
      isPro: true,
    },
    {
      name: 'Ahmed M.',
      title: 'Product Manager and UX',
      photo:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      timezone: 'London, UK (GMT +1)',
      isPro: true,
    },
    {
      name: 'Ahmed M.',
      title: 'Product Manager and UX',
      photo:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      timezone: 'London, UK (GMT +1)',
      isPro: true,
    },
    {
      name: 'Ahmed M.',
      title: 'Product Manager and UX',
      photo:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      timezone: 'London, UK (GMT +1)',
      isPro: true,
    },
    {
      name: 'Ahmed M.',
      title: 'Product Manager and UX',
      photo:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      timezone: 'London, UK (GMT +1)',
      isPro: true,
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
