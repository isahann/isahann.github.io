import {Component, OnInit} from '@angular/core';
import {ClippyService} from "./clippy/clippy.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  constructor(
    private readonly clippyService: ClippyService
  ) {
  }

  ngOnInit() {
    this.clippyService.speak('Welcome!');
  }

}
