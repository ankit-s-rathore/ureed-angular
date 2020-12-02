import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ureed-review-pitches-tab',
  templateUrl: './review-pitches-tab.component.html',
  styleUrls: ['./review-pitches-tab.component.scss'],
})
export class ReviewPitchesTabComponent implements OnInit {
  isOpenMenu = false;
  status: any[] = [
    {
      id: 1,
      name: 'Available',
    },
    {
      id: 2,
      name: 'Not Available',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
