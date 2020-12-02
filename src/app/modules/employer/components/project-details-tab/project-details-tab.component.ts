import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ureed-project-details-tab',
  templateUrl: './project-details-tab.component.html',
  styleUrls: ['./project-details-tab.component.scss'],
})
export class ProjectDetailsTabComponent implements OnInit {
  showUploadFileModal = false;
  industries$: Observable<any[] | undefined>;
  skills: any[] = [
    {
      id: 1,
      name: 'Angular',
      category: 'Angular',
    },
    {
      id: 2,
      name: 'HTML/CSS',
      category: 'HTML',
    },
    {
      id: 3,
      name: 'NgRX',
      category: 'Angular',
    },
    {
      id: 4,
      name: 'RxJS',
      category: 'Angular',
    },
    {
      id: 5,
      name: 'React',
    },
    {
      id: 6,
      name: 'Magento',
      category: 'Angular',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
