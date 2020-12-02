import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ureed-employer-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  projectType = [
    {
      id: 1,
      name: 'Public project',
      icon: 'assets/icons/svg/eye.svg',
    },
    {
      id: 2,
      name: 'Private project',
      icon: 'assets/icons/svg/lock.svg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
