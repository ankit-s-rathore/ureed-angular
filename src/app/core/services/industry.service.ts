import { Observable } from 'rxjs';
import { IndustryServiceGql } from '@gql';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IndustryService {
  constructor(private _industryServiceGql: IndustryServiceGql) {}

  getIndustries(includeSpecialities = false): Observable<any> {
    return this._industryServiceGql.getIndustries(includeSpecialities);
  }

  getIndustryById(id: string, includeSpecialities = false): Observable<any> {
    return this._industryServiceGql.getIndustryById(id, includeSpecialities);
  }
}
