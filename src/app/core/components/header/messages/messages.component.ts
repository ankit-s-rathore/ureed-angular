import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ureed-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  animations: [
    trigger('dropMenuAnimate', [
      transition('void => *', [
        style({ transform: 'translateY(20PX)' }),
        animate(700, style({ transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class MessagesComponent implements OnInit {
  showMessagesMenu = false;

  constructor() {}

  ngOnInit(): void {}
}
