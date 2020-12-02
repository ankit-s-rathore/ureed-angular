import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPipe } from '@ureed/shared/pipes';
import { MultiSelectComponent } from './multi-select.component';

const mockItems = [
  { id: 1, name: 'Angular' },
  { id: 2, name: 'React' },
  { id: 3, name: 'Java' },
  { id: 4, name: 'PHP' },
  { id: 5, name: 'Python' },
];

const mockSelectedItems = [
  { id: 3, name: 'Java' },
  { id: 4, name: 'PHP' },
];

describe('MultiSelectComponent', () => {
  let component: MultiSelectComponent;
  let fixture: ComponentFixture<MultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiSelectComponent, FilterPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectComponent);
    component = fixture.componentInstance;
    component.isOpen = false;
    component.items = mockItems;
    component.label = 'Select type';
    component.selectedItems = mockSelectedItems;
    fixture.detectChanges();
  });

  describe('DOM', () => {
    it('should have default selected items', () => {
      const selectedItem = fixture.nativeElement.querySelector('.select-btn');

      expect(selectedItem.textContent).toContain('PHP');
      expect(selectedItem.textContent).toContain('Java');
    });

    it('should toggle dropdown menu', () => {
      const chipButton = fixture.nativeElement.querySelector('.select-btn');

      chipButton.click();
      expect(component.isOpen).toBe(true);

      chipButton.click();
      expect(component.isOpen).toBe(false);
    });

    it('should filter item using ureedFilter pipe', () => {
      component.items = mockItems;
      component.searchQuery = 'java';
      fixture.detectChanges();
      const menu = fixture.nativeElement.querySelectorAll('.menu-item');

      expect(menu.length).toEqual(1);
      expect(menu[0].textContent.trim()).toContain('Java');
    });

    it('should select/de-select multiple items from menu', () => {
      component.items = mockItems;

      const menuButton = fixture.nativeElement.querySelector('.select-btn');

      // open menu on clicking menu dropdown
      menuButton.click();

      // menu opened for multi selection
      expect(component.isOpen).toBe(true);

      // dropdown menu items
      const menu = fixture.nativeElement.querySelectorAll('.menu-item');

      // multi select menu items
      menu[0].click();
      menu[1].click();

      expect(component.items[0].checked).toBe(true);
      expect(component.items[1].checked).toBe(true);

      // de-select previously selected items from menu
      menu[0].click();
      menu[1].click();

      expect(component.items[0].checked).toBe(false);
      expect(component.items[1].checked).toBe(false);
    });
  });

  describe('COMPONENT', () => {
    it('should add item in selected items list on select if not exist', () => {
      const selectedItem = { id: 5, name: 'Python' };

      // make sure item not already exist
      const itemNotExist = !!component.selectedItems.find(
        item => item.id === selectedItem.id
      );

      expect(itemNotExist).toBe(false);

      // add selected item
      component.onSelect(selectedItem);

      // selected item should have added in selected items list
      const itemExist = !!component.selectedItems.find(
        item => item.id === selectedItem.id
      );

      expect(itemExist).toBe(true);
    });

    it('should remove item from selected items list on select if item already exist', () => {
      component.selectedItems = mockSelectedItems;
      const selectedItem = { id: 4, name: 'PHP' };

      // make sure item already exist
      const itemExist = !!component.selectedItems.find(
        item => item.id === selectedItem.id
      );

      expect(itemExist).toBe(true);

      // remove selected item
      component.onSelect(selectedItem);

      // selected item should remove from selected items list
      const itemNotExist = !!component.selectedItems.find(
        item => item.id === selectedItem.id
      );

      expect(itemNotExist).toBe(false);
    });

    it('should emit selectionChange on menu close', () => {
      component.isSelected = true;
      spyOn(component.selectionChange, 'emit');

      component.onCloseMenu({});

      expect(component.isOpen).toBe(false);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(component.selectionChange.emit).toHaveBeenCalled();
    });
  });
});
