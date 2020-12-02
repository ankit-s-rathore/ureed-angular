import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ureed-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() isPrivate: boolean;
  @Input() isQualified: boolean;
  @Input() showInviteBtn = true;
  @Input() showPitchesBtn = true;
  @Input() isDraft = false;
  @Input() showEditingBtn = false;
  @Input() showRepostBtn = false;
  @Input() isClosed = false;

  isOpenMenu = false;

  constructor() {}

  ngOnInit(): void {}
}
