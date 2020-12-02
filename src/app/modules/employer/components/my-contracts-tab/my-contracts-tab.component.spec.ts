import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyContractsTabComponent } from './my-contracts-tab.component';

describe('MyContractsTabComponent', () => {
  let component: MyContractsTabComponent;
  let fixture: ComponentFixture<MyContractsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyContractsTabComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyContractsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
