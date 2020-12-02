import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProjectComponent } from './post-project.component';

describe('PostProjectComponent', () => {
  let component: PostProjectComponent;
  let fixture: ComponentFixture<PostProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostProjectComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
