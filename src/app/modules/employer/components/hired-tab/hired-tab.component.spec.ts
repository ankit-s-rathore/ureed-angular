import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredTabComponent } from './hired-tab.component';

describe('HiredTabComponent', () => {
  let component: HiredTabComponent;
  let fixture: ComponentFixture<HiredTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HiredTabComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiredTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
