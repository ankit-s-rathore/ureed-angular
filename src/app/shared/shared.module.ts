import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import {
  TabComponent,
  TabsComponent,
  ChipsComponent,
  AlertComponent,
  ModalComponent,
  SelectComponent,
  ModalBodyComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  MultiSelectComponent,
} from './components';
import { FilterPipe } from './pipes';
import { ClickOutsideDirective } from './directives';

@NgModule({
  declarations: [
    FilterPipe,
    TabComponent,
    TabsComponent,
    ChipsComponent,
    AlertComponent,
    ModalComponent,
    SelectComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    MultiSelectComponent,
    ClickOutsideDirective,
  ],
  imports: [CommonModule, OverlayModule, ReactiveFormsModule],
  exports: [
    TabComponent,
    TabsComponent,
    ChipsComponent,
    AlertComponent,
    ModalComponent,
    SelectComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    MultiSelectComponent,
    ClickOutsideDirective,
  ],
})
export class SharedModule {}
