import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ureed-freelancer-info',
  templateUrl: './freelancer-info.component.html',
  styleUrls: ['./freelancer-info.component.scss'],
})
export class FreelancerInfoComponent implements OnInit {
  @Input() freelancer: any;
  @Input() photoSize: string;
  @Input() nameSize: string;

  constructor() {}

  ngOnInit(): void {}
}
