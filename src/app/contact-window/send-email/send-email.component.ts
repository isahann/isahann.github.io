import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.sass']
})
export class SendEmailComponent implements OnInit {

  emailSubject: string;
  emailText: string;

  constructor(
    // private readonly clippyService: ClippyService
  ) {
    this.emailText = "Write something..."
    this.emailSubject = "Hi!"
  }

  ngOnInit(): void {
    // Empty
  }

  sendEmail(): void {

  }

  clearFields(): void {
    this.emailSubject = '';
    this.emailText = '';
  }
}
