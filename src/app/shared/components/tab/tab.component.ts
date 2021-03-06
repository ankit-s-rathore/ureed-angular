import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ureed-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input() title: string;
  @Input() badge: string;
  @Input() active = false;
  @Input() isContainer = false;

  constructor() {}

  ngOnInit(): void {}
}
