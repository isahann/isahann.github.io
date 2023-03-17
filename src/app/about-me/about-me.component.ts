import {Component, OnInit} from '@angular/core';
import {WindowTab} from "../types/Tab";
import {WhoAmIComponent} from "./who-am-i/who-am-i.component";
import {WhatDoIDoComponent} from "./what-do-i-do/what-do-i-do.component";
import {WhatDoIKnowComponent} from "./what-do-i-know/what-do-i-know.component";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.sass']
})
export class AboutMeComponent implements OnInit {

  readonly windowTitleBar: string = 'About me';
  readonly windowButtons: string[] = ['Minimize', 'Maximize', 'Close'];

  protected windowTabs: WindowTab[] = [{
    id: 'tab-who-am-i',
    title: 'Who am I?',
    selected: true,
    component: WhoAmIComponent
  }, {
    id: 'tab-what-do-i-do',
    title: 'What do I do?',
    selected: false,
    component: WhatDoIDoComponent
  }, {
    id: 'tab-what-do-i-know',
    title: 'What do I know?',
    selected: false,
    component: WhatDoIKnowComponent
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

