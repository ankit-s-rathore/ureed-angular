import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ureed-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.scss'],
  animations: [
    trigger('dropMenuAnimate', [
      transition('void => *', [
        style({ transform: 'translateY(20PX)' }),
        animate(700, style({ transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class LanguageMenuComponent implements OnInit {
  showLanguageMenu = false;

  constructor() {}

  ngOnInit(): void {}
}
