import { Input, OnInit, Output, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'ureed-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss'],
})
export class ModalHeaderComponent implements OnInit {
  @Input() modalTitle: string;
  @Output() modalClose: EventEmitter<null> = new EventEmitter<null>();

  constructor() {}

  ngOnInit(): void {}
}
