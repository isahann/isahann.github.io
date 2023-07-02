import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-selection-window',
  templateUrl: './language-selection-window.component.html',
  styleUrls: ['./language-selection-window.component.sass']
})
export class LanguageSelectionWindowComponent implements OnInit {
  readonly windowTitleBar: string = 'Language';
  readonly windowButtons: string[] = ['Minimize', 'Maximize', 'Close'];

  constructor() { }

  ngOnInit(): void {
  }

}
