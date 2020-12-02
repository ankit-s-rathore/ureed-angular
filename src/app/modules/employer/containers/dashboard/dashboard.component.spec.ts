import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { DashboardComponent } from './dashboard.component';

xdescribe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should open create project modal', done => {
    const postProjectBtn = fixture.nativeElement.querySelector(
      '.post-project-btn'
    );

    postProjectBtn.click();

    return component.showPostProjectModal$.subscribe(value => {
      expect(value).toBeTrue();
      done();
    });
  });
});
