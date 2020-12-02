import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ISelectItem } from '@models';

@Component({
  selector: 'ureed-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() label = 'Select';
  @Input() placeholder = 'Search';
  @Input() minItemsForSearch = 10;
  @Input() showIcon = false;
  @Input() selectedItem: ISelectItem;
  @Input() items: ISelectItem[] = [];
  @Output() selectionChange: EventEmitter<ISelectItem> = new EventEmitter();

  isOpen = false;
  searchQuery = '';

  constructor() {}

  searchItem(event: KeyboardEvent): void {
    this.searchQuery = (event.target as HTMLInputElement).value.trim();
  }

  onSelect(item: ISelectItem): void {
    this.isOpen = false;
    this.selectedItem = item;
    this.selectionChange.emit(item);
  }

  ngOnInit(): void {}
}
