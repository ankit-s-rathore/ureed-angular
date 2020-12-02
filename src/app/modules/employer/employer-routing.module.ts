import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  DashboardComponent,
  FreelancerProfileComponent,
  ProjectDetailsComponent,
  ProjectsComponent,
} from './containers';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project-details', component: ProjectDetailsComponent },
  { path: 'freelancer-profile', component: FreelancerProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployerRoutingModule {}
