import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export const modalSize = {
  small: 'max-w-md',
  medium: 'max-w-2xl',
  large: 'max-w-6xl',
};

@Component({
  selector: 'ureed-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() size = 'medium';
  @Input() modalTitle: string;
  @Output() modalClose: EventEmitter<null> = new EventEmitter<null>();

  constructor() {}

  ngOnInit(): void {
    this.size = modalSize[this.size];
  }
}
