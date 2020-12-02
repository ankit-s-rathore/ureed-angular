import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  Input,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'ureed-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit, AfterContentInit {
  @Input() fullTabBarWidth = false;
  @Input() isCornerRounded = false;
  @Input() addSpaceBeforeFirstTab = true;
  @Input() tabSize = '';
  @Input() notActiveBackgroundClass = '';
  @Input() isContainer = false;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter(tab => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent): void {
    this.tabs.toArray().forEach(tab => (tab.active = false));

    tab.active = true;
  }
}
