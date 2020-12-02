import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ureed-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() time: string;
  constructor() {}

  ngOnInit(): void {}
}
