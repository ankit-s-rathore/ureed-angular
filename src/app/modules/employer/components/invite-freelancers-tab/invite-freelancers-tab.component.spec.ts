import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteFreelancersTabComponent } from './invite-freelancers-tab.component';

describe('InviteFreelancersTabComponent', () => {
  let component: InviteFreelancersTabComponent;
  let fixture: ComponentFixture<InviteFreelancersTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InviteFreelancersTabComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteFreelancersTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
