import {Component, OnInit} from '@angular/core';
import {ClippyService} from "../clippy/clippy.service";

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.sass']
})
export class ProfessionalExperienceComponent implements OnInit {

  constructor(
    private readonly clippyService: ClippyService
  ) {
  }

  ngOnInit(): void {
  }

  speak(text: string) {
    this.clippyService.speak(text);
  }
}
