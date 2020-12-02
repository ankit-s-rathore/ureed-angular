import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ureed-contract-card-freelancer',
  templateUrl: './contract-card-freelancer.component.html',
  styleUrls: ['./contract-card-freelancer.component.scss'],
})
export class ContractCardFreelancerComponent implements OnInit {
  @Input() freelancer: any;

  constructor() {}

  ngOnInit(): void {}
}
