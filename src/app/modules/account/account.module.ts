import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './containers';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AccountRoutingModule],
})
export class AccountModule {}
