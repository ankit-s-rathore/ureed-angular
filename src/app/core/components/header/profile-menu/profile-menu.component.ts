import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ureed-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
  animations: [
    trigger('dropMenuAnimate', [
      transition('void => *', [
        style({ transform: 'translateY(20PX)' }),
        animate(700, style({ transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class ProfileMenuComponent implements OnInit {
  showProfileMenu = false;

  constructor() {}

  ngOnInit(): void {}
}
