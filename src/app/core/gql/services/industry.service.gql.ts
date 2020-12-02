import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { industryQuery, industriesQuery } from '../queries';

@Injectable({
  providedIn: 'root',
})
export class IndustryServiceGql {
  constructor(private _apollo: Apollo) {}

  getIndustries(includeSpecialities: boolean): Observable<any> {
    return this._apollo
      .watchQuery({
        query: industriesQuery,
        variables: {
          includeSpecialities,
        },
      })
      .valueChanges.pipe(map((res: any) => res.data.industries));
  }

  getIndustryById(id: string, includeSpecialities: boolean): Observable<any> {
    return this._apollo
      .watchQuery({
        query: industryQuery,
        variables: {
          id,
          includeSpecialities,
        },
      })
      .valueChanges.pipe(map((res: any) => res.data.industry));
  }
}
