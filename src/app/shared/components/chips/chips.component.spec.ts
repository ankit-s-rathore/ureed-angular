import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPipe } from '@ureed/shared/pipes';
import { ChipsComponent } from './chips.component';

const mockItems = [
  { id: 1, name: 'Angular', category: 'angular' },
  { id: 2, name: 'React', category: 'react' },
  { id: 3, name: 'HTML', category: 'html' },
];
const mockSelectedItems = [
  { id: 1, name: 'Angular', category: 'angular' },
  { id: 2, name: 'React', category: 'react' },
];

describe('ChipComponent', () => {
  let component: ChipsComponent;
  let fixture: ComponentFixture<ChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChipsComponent, FilterPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsComponent);
    component = fixture.componentInstance;
    component.isOpen = false;
    component.items = mockItems;
    component.label = 'Add a skill';
    component.selectedItems = mockSelectedItems;
    fixture.detectChanges();
  });

  describe('DOM', () => {
    it('should have selected chips', () => {
      const selectedChips = fixture.nativeElement.querySelectorAll(
        '.selected-chips'
      );

      expect(selectedChips[1].textContent).toContain('React');
      expect(selectedChips[0].textContent).toContain('Angular');
    });
    it('should have chip button', () => {
      const chipButton = fixture.nativeElement.querySelector('.chip-button');

      expect(chipButton.textContent).toContain(component.label);
    });
    it('should toggle dropdown menu', () => {
      const chipButton = fixture.nativeElement.querySelector('.chip-button');

      chipButton.click();
      expect(component.isOpen).toBe(true);

      chipButton.click();
      expect(component.isOpen).toBe(false);
    });
    it('should select item from menu', () => {
      spyOn(component.selectionChange, 'emit');
      component.items = mockItems;
      fixture.detectChanges();
      const menu = fixture.nativeElement.querySelectorAll('.menu-item');

      menu[0].click();
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(component.selectionChange.emit).toHaveBeenCalled();
    });
    it('should filter item using ureedFilter pipe', () => {
      spyOn(component.selectionChange, 'emit');
      component.items = mockItems;
      component.searchQuery = 'angular';
      fixture.detectChanges();
      const menu = fixture.nativeElement.querySelectorAll('.menu-item');

      expect(menu.length).toEqual(1);
      expect(menu[0].textContent.trim()).toContain('Angular');
    });
  });

  describe('COMPONENT', () => {
    it('should test addItem method', () => {
      spyOn(component.selectionChange, 'emit');
      const newItem = { id: 10, name: 'RxJS' };

      component.addItem(newItem);

      const items = component.items.includes(newItem);
      const selectedItems = component.selectedItems.includes(newItem);

      expect(items).toBe(false);
      expect(selectedItems).toBe(true);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(component.selectionChange.emit).toHaveBeenCalled();
    });
    it('should test removeItem method', () => {
      spyOn(component.selectionChange, 'emit');
      const newItem = { id: 10, name: 'RxJS' };

      component.removeItem(newItem);

      const items = component.items.includes(newItem);
      const selectedItems = component.selectedItems.includes(newItem);

      expect(items).toBe(true);
      expect(selectedItems).toBe(false);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(component.selectionChange.emit).toHaveBeenCalled();
    });
  });
});
