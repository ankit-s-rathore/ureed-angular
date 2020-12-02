import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@ureed/shared/shared.module';

import {
  CopyrightComponent,
  FooterComponent,
  HeaderComponent,
  LanguageMenuComponent,
  MenuItemsComponent,
  MessagesComponent,
  NotificationsComponent,
  ProfileMenuComponent,
  QuickLinksComponent,
  SearchBarComponent,
  SocialIconsComponent,
  MobileMenuComponent,
} from './components';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SocialIconsComponent,
    QuickLinksComponent,
    CopyrightComponent,
    ProfileMenuComponent,
    LanguageMenuComponent,
    NotificationsComponent,
    MessagesComponent,
    SearchBarComponent,
    MenuItemsComponent,
    MobileMenuComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
