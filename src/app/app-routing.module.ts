import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./modules/account/account.module').then(m => m.AccountModule),
  },
  {
    path: 'employer',
    loadChildren: () =>
      import('./modules/employer/employer.module').then(m => m.EmployerModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
