import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-window',
  templateUrl: './contact-window.component.html',
  styleUrls: ['./contact-window.component.sass']
})
export class ContactWindowComponent implements OnInit {

  readonly windowTitleBar: string = 'Contact';
  private readonly redirectURLs: string[] = ['mailto:isahanacleto@gmail.com', 'https://www.linkedin.com/in/isahann-hanacleto/', 'https://github.com/isahann']

  constructor() {
  }

  ngOnInit(): void {
  }

  public redirect(index: number): void {
    window.location.href = this.redirectURLs[index]!;
  }
}
