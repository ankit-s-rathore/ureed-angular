import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ureed-post-project',
  templateUrl: './post-project.component.html',
  styleUrls: ['./post-project.component.scss'],
})
export class PostProjectComponent implements OnInit {
  @Input() showModal: boolean;
  @Input() industries: any[];
  @Output() closeModal: EventEmitter<null> = new EventEmitter<null>();
  @Output() submitModal: EventEmitter<null> = new EventEmitter<null>();

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

  budget = [
    {
      id: 1,
      name: 'Hourly rated',
    },
    {
      id: 2,
      name: 'Fixed budget',
    },
  ];

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

  close(): void {
    this.closeModal.emit();
  }

  submit(): void {
    this.submitModal.emit();
  }

  ngOnInit(): void {}
}
