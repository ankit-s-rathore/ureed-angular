import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectsTabComponent } from './my-projects-tab.component';

xdescribe('MyProjectsTabComponent', () => {
  let component: MyProjectsTabComponent;
  let fixture: ComponentFixture<MyProjectsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyProjectsTabComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProjectsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
