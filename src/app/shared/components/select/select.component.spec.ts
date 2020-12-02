import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPipe } from '@ureed/shared/pipes';
import { SelectComponent } from './select.component';

const mockItems = [
  { id: 1, name: 'Public project', icon: 'eye.svg' },
  { id: 2, name: 'Private project', icon: 'lock.svg' },
];

const mockSelectedItem = { id: 2, name: 'React', icon: 'lock.svg' };

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectComponent, FilterPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    component.isOpen = false;
    component.items = mockItems;
    component.label = 'Select type';
    component.selectedItem = mockSelectedItem;
    fixture.detectChanges();
  });

  describe('DOM', () => {
    it('should have selected item', () => {
      const selectedItem = fixture.nativeElement.querySelector('.select-btn');

      expect(selectedItem.textContent).toContain(selectedItem.name);
    });
    it('should toggle dropdown menu', () => {
      const chipButton = fixture.nativeElement.querySelector('.select-btn');

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
      component.searchQuery = 'public';
      fixture.detectChanges();
      const menu = fixture.nativeElement.querySelectorAll('.menu-item');

      expect(menu.length).toEqual(1);
      expect(menu[0].textContent.trim()).toContain('Public project');
    });
  });
  describe('COMPONENT', () => {
    it('should test onSelect method', () => {
      spyOn(component.selectionChange, 'emit');
      const newItem = { id: 2, name: 'Private project' };

      component.onSelect(newItem);

      expect(component.selectedItem.id).toBe(2);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(component.selectionChange.emit).toHaveBeenCalled();
      expect(component.selectedItem.name).toEqual('Private project');
    });
  });
});
