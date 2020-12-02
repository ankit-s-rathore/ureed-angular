import { Observable } from 'rxjs';
import { FreelancerServiceGql } from '@gql';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FreelancerService {
  constructor(private _freelancerServiceGql: FreelancerServiceGql) {}

  getFreelancers(): Observable<any> {
    return this._freelancerServiceGql.getFreelancers();
  }

  getFreelancerById(id: string): Observable<any> {
    return this._freelancerServiceGql.getFreelancerById(id);
  }
}
