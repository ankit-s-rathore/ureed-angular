import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemsComponent } from './menu-items.component';

describe('MenuItemsComponent', () => {
  let fixture: ComponentFixture<MenuItemsComponent>;
  let a: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuItemsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemsComponent);
    fixture.detectChanges();
  });

  describe('Menu items', () => {
    it('should contain (Dashboard)', () => {
      a = fixture.nativeElement.querySelector('.item-1');
      expect(a.textContent).toEqual('Dashboard');
    });

    it('should contain (Find Freelancers)', () => {
      a = fixture.nativeElement.querySelector('.item-2');
      expect(a.textContent).toEqual('Find Freelancers');
    });

    it('should contain (Projects)', () => {
      a = fixture.nativeElement.querySelector('.item-3');
      expect(a.textContent).toEqual('Projects');
    });
  });
});
