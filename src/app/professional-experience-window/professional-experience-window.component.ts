import {Component, OnInit} from '@angular/core';
import {WindowTab} from "../types/Tab";
import {TotvsExperienceComponent} from "./totvs-experience/totvs-experience.component";
import {SyngularExperienceComponent} from "./syngular-experience/syngular-experience.component";
import {MateraExperienceComponent} from "./matera-experience/matera-experience.component";
import {CiandtExperienceComponent} from "./ciandt-experience/ciandt-experience.component";

@Component({
  selector: 'app-professional-experience-window',
  templateUrl: './professional-experience-window.component.html',
  styleUrls: ['./professional-experience-window.component.sass']
})
export class ProfessionalExperienceWindowComponent implements OnInit {

  readonly windowTitleBar: string = 'Professional Experience';
  readonly windowButtons: string[] = ['Minimize', 'Maximize', 'Close'];

  protected windowTabs: WindowTab[] = [{
    id: 'tab-totvs',
    title: 'TOTVS',
    selected: true,
    component: TotvsExperienceComponent
  }, {
    id: 'tab-syngular',
    title: 'Syngular Systems',
    selected: false,
    component: SyngularExperienceComponent
  }, {
    id: 'tab-matera',
    title: 'Matera',
    selected: false,
    component: MateraExperienceComponent
  }, {
    id: 'tab-ciandt',
    title: 'CI&T',
    selected: false,
    component: CiandtExperienceComponent
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
