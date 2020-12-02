import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ureed-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
  animations: [
    trigger('dropMenuAnimate', [
      transition('void => *', [
        style({ transform: 'translateY(20PX)' }),
        animate(700, style({ transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class MobileMenuComponent implements OnInit {
  sideMenuShow = false;

  constructor() {}

  ngOnInit(): void {}
}
