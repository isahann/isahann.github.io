import {Component, OnInit} from '@angular/core';
import {WindowTab, WindowTabArticle} from "../types/Tab";
import {WhoAmIComponent} from "./who-am-i/who-am-i.component";
import {WhatDoIDoComponent} from "./what-do-i-do/what-do-i-do.component";
import {WhatDoIKnowComponent} from "./what-do-i-know/what-do-i-know.component";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.sass']
})
export class AboutMeComponent implements OnInit {

  protected windowTabs: WindowTab[] = [{
    ariaSelected: true,
    ariaControls: 'tab-A',
    title: 'Who am I?'
  }, {
    ariaSelected: false,
    ariaControls: 'tab-B',
    title: 'What do I do?',
  }, {
    ariaSelected: false,
    ariaControls: 'tab-C',
    title: 'What do I know?'
  }];

  protected articles: WindowTabArticle[] = [
    {
      id: 'tab-A',
      hidden: false,
      component: WhoAmIComponent
    }, {
      id: 'tab-B',
      hidden: true,
      component: WhatDoIDoComponent
    }, {
      id: 'tab-C',
      hidden: true,
      component: WhatDoIKnowComponent
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  changeSelectedTab(selectedTab: WindowTab): void {
    if (selectedTab.ariaSelected)
      return;

    this.windowTabs.forEach(tab =>
      tab.ariaSelected = tab.ariaControls === selectedTab.ariaControls
    );

    this.articles.forEach(article => {
      article.hidden = article.id !== selectedTab.ariaControls
    });
  }
}
