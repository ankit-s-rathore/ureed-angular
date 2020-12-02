import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ureed-contract-card',
  templateUrl: './contract-card.component.html',
  styleUrls: ['./contract-card.component.scss'],
})
export class ContractCardComponent implements OnInit {
  @Input() isPrivate: boolean;
  @Input() freelancers: any[];

  constructor() {}

  ngOnInit(): void {}
}
