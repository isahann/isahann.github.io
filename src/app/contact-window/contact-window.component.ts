import {Component, OnInit} from '@angular/core';
import {WindowTab} from "../types/Tab";
import {SocialComponent} from "./social/social.component";

@Component({
  selector: 'app-contact-window',
  templateUrl: './contact-window.component.html',
  styleUrls: ['./contact-window.component.sass']
})
export class ContactWindowComponent implements OnInit {

  readonly windowTitleBar: string = 'Contact';
  readonly windowButtons: string[] = ['Minimize', 'Maximize', 'Close'];

  protected windowTabs: WindowTab[] = [{
    id: 'tab-social',
    title: 'Social',
    selected: true,
    component: SocialComponent
  },
  //   {
  //   id: 'tab-email',
  //   title: 'Email me',
  //   selected: false,
  //   component: SendEmailComponent
  // }
  ];

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
