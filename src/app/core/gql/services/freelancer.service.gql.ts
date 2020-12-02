/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { freelancerQuery, freelancersQuery } from '../queries';

@Injectable({
  providedIn: 'root',
})
export class FreelancerServiceGql {
  constructor(private _apollo: Apollo) {}

  getFreelancers(): Observable<any> {
    return this._apollo
      .watchQuery({
        query: freelancersQuery,
      })
      .valueChanges.pipe(map((res: any) => res.data.freelancers));
  }

  getFreelancerById(id: string): Observable<any> {
    return this._apollo
      .watchQuery({
        query: freelancerQuery,
        variables: {
          id,
        },
      })
      .valueChanges.pipe(map((res: any) => res.data.freelancer));
  }
}
