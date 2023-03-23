import {Component, OnInit} from '@angular/core';
import {WindowTab} from "../types/Tab";
import {UnivelComponent} from "./univel/univel.component";
import {UtfprComponent} from "./utfpr/utfpr.component";

@Component({
  selector: 'app-education-window',
  templateUrl: './education-window.component.html',
  styleUrls: ['./education-window.component.sass']
})
export class EducationWindowComponent implements OnInit {

  readonly windowTitleBar: string = 'Education';
  readonly windowButtons: string[] = ['Minimize', 'Maximize', 'Close'];

  protected windowTabs: WindowTab[] = [{
    id: 'tab-univel',
    title: 'Univel',
    selected: true,
    component: UnivelComponent
  }, {
    id: 'tab-utfpr',
    title: 'UTFPR',
    selected: false,
    component: UtfprComponent
  }];

  constructor() {
    // Empty
  }

  ngOnInit(): void {
    // Empty
  }

  changeSelectedTab(selectedTab: WindowTab): void {
    if (selectedTab.selected)
      return;

    this.windowTabs.forEach(tab => {
      tab.selected = selectedTab.id === tab.id
    })
  }
}
