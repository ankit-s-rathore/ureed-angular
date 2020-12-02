import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IChipItem } from '@models';

@Component({
  selector: 'ureed-chip',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class ChipsComponent implements OnInit {
  @Input() label = 'Add';
  @Input() items: IChipItem[] = [];
  @Input() placeholder = 'Search';
  @Input() minItemsForSearch = 10;
  @Input() selectedItems: IChipItem[] = [];
  @Output() selectionChange: EventEmitter<IChipItem[]> = new EventEmitter();

  isOpen = false;
  searchQuery = '';

  constructor() {}

  searchItem(event: KeyboardEvent): void {
    this.searchQuery = (event.target as HTMLInputElement).value.trim();
  }

  addItem(chipItem: IChipItem): void {
    this.searchQuery = '';
    this.selectedItems.push(chipItem);
    this.selectionChange.emit(this.selectedItems);
    this.items = this.items.filter(item => item.id !== chipItem.id);
  }

  removeItem(item: IChipItem): void {
    this.items.push(item);
    this.selectedItems = this.selectedItems.filter(
      selectedItem => selectedItem.id !== item.id
    );
    this.selectionChange.emit(this.selectedItems);
  }

  ngOnInit(): void {
    // filter out the selected items from item array
    this.items = this.items.filter(item =>
      this.selectedItems.every(selectedItem => item.id !== selectedItem.id)
    );
  }
}
