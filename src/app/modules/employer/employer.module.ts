import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@ureed/shared/shared.module';

import {
  BusinessAccountCardComponent,
  CompleteProfileCardComponent,
  ContractCardComponent,
  ContractCardFreelancerComponent,
  FreelancerInfoComponent,
  PostProjectComponent,
  ProjectCardComponent,
  InviteFreelancersTabComponent,
  MyProjectsTabComponent,
  MyContractsTabComponent,
  ProjectDetailsTabComponent,
  HiredTabComponent,
  ReviewPitchesTabComponent,
} from './components';
import {
  DashboardComponent,
  ProjectsComponent,
  ProjectDetailsComponent,
  FreelancerProfileComponent,
} from './containers';
import { EmployerRoutingModule } from './employer-routing.module';
import * as fromEmployer from './state';
import * as featureKeys from './state/feature-keys';

@NgModule({
  declarations: [
    DashboardComponent,
    BusinessAccountCardComponent,
    CompleteProfileCardComponent,
    ProjectCardComponent,
    ContractCardComponent,
    ContractCardFreelancerComponent,
    FreelancerInfoComponent,
    PostProjectComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    ProjectDetailsTabComponent,
    InviteFreelancersTabComponent,
    MyProjectsTabComponent,
    MyContractsTabComponent,
    HiredTabComponent,
    ReviewPitchesTabComponent,
    FreelancerProfileComponent,
  ],
  imports: [
    CommonModule,
    EmployerRoutingModule,
    SharedModule,
    StoreModule.forFeature(
      featureKeys.employerFeatureKey,
      fromEmployer.reducers
    ),
    EffectsModule.forFeature([fromEmployer.DashboardEffects]),
  ],
})
export class EmployerModule {}
