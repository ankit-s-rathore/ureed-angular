import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ISelectItem } from '@models';

@Component({
  selector: 'ureed-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
})
export class MultiSelectComponent implements OnInit {
  @Input() heading = '';
  @Input() label = 'Select';
  @Input() maxItemSelect: number;
  @Input() placeholder = 'Search';
  @Input() minItemsForSearch = 10;
  @Input() items: ISelectItem[] = [];
  @Input() selectedItems: ISelectItem[] = [];
  @Output() selectionChange: EventEmitter<ISelectItem[]> = new EventEmitter();

  isOpen = false;
  searchQuery = '';
  isSelected = false;

  constructor() {}

  searchItem(event: KeyboardEvent): void {
    this.searchQuery = (event.target as HTMLInputElement).value.trim();
  }

  onSelect(newItem: ISelectItem): void {
    this.isSelected = true;
    const filteredItem = this.selectedItems.find(
      (selectedItem: ISelectItem) => selectedItem.id === newItem.id
    );

    if (filteredItem) {
      this._removeItem(filteredItem);

      return;
    }

    this._addItem(newItem);
  }

  onCloseMenu(event): void {
    if (
      event.target &&
      event.target.className &&
      event.target.className.includes('select-item')
    ) {
      return;
    }

    this.isOpen = false;
    this.searchQuery = '';

    if (this.isSelected) {
      this.isSelected = false;
      this.selectionChange.emit(this.selectedItems);
    }
  }

  parseSelectedItems(): string {
    return this.selectedItems.map(item => item.name).join(', ');
  }

  ngOnInit(): void {
    this.items = this.items.map((item: ISelectItem) => ({
      ...item,
      checked: !!this.selectedItems.find(
        selectedItem => item.id === selectedItem.id
      ),
    }));
  }

  private _addItem(newItem: ISelectItem): void {
    this.selectedItems.push(newItem);
    this.items = this.items.map((item: ISelectItem) =>
      item.id === newItem.id ? { ...newItem, checked: true } : item
    );
  }

  private _removeItem(filteredItem: ISelectItem): void {
    this.selectedItems = this.selectedItems.filter(
      (selectedItem: ISelectItem) => selectedItem.id !== filteredItem.id
    );

    this.items = this.items.map((item: ISelectItem) =>
      item.id === filteredItem.id ? { ...filteredItem, checked: false } : item
    );
  }
}
