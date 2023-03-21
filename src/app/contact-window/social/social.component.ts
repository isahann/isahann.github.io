import { Component, OnInit } from '@angular/core';
import {Contact} from "../../types/Contact";
import {ClippyService} from "../../clippy/clippy.service";

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.sass']
})
export class SocialComponent implements OnInit {

  readonly contacts: Contact[] = [
    {
      title: 'Gmail',
      imagePath: 'assets/images/gmail.png',
      alt: 'Mail',
      message: 'Sending a new email...',
      redirectUrl: 'mailto:isahanacleto@gmail.com'
    },
    {
      title: 'LinkedIn',
      imagePath: 'assets/images/linkedin.png',
      alt: 'Linkedin',
      message: 'Sending you to my LinkedIn, feel free to send a message!',
      redirectUrl: 'https://www.linkedin.com/in/isahann-hanacleto/'
    },
    {
      title: 'GitHub',
      imagePath: 'assets/images/github.png',
      alt: 'GitHub',
      message: 'Sending you to my GitHub...',
      redirectUrl: 'https://github.com/isahann'
    },
  ]

  constructor(private readonly clippyService: ClippyService) {
    // Empty
  }

  ngOnInit(): void {
    // Empty
  }

  redirect(contact: Contact) {
    this.clippyService.speak(contact.message);
    this.clippyService.play("SendMail");

    setTimeout(() => {
      window.location.href = contact.redirectUrl;
    }, 5000)
  }
}
