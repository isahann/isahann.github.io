import {Component, OnInit} from '@angular/core';
import {WindowTab} from "../model/Tab";
import {EducationWindowTab} from "../model/EducationWindowTab";

@Component({
  selector: 'app-education-window',
  templateUrl: './education-window.component.html',
  styleUrls: ['./education-window.component.sass']
})
export class EducationWindowComponent implements OnInit {

  readonly windowTitleBar: string = 'Education';

  public readonly educationWindowTabs: EducationWindowTab[] = [{
    id: 'tab-univel',
    title: 'Univel',
    selected: true,
    institution: 'Univel',
    location: 'Cascavel - PR, Brazil',
    duration: 'jan/2016 - dec/2018',
    degree: 'Technical degree',
    skills: ['Java', 'PostgreSQL', 'Git', 'Apache Maven', 'JavaScript', 'Hibernate', 'Angular (Framework)', 'JUnit', 'C++', 'CSS', 'HTML']
  }, {
    id: 'tab-utfpr',
    title: 'UTFPR',
    selected: false,
    institution: 'Universidade Tecnológica Federal do Paraná (UTFPR)',
    location: 'Cornélio Procópio - PR, Brazil (Remote)',
    duration: 'aug/2021 - dec/2022',
    degree: 'Specialization, post-graduate degree',
    skills: ['Java', 'PostgreSQL', 'Git', 'Apache Maven', 'JavaScript/Typescript', 'Hibernate', 'Angular (Framework)', 'JUnit', 'HTML']
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

    this.educationWindowTabs.forEach(tab => {
      tab.selected = selectedTab.id === tab.id
    })
  }
}
