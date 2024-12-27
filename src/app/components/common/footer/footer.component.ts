import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  menuOptions = ['Home', 'About', 'Services', 'Initiatives', 'Reach Us', 'Internship']
  socialIcons = [
    { name: 'Facebook', imageUrl: '/assets/icons/facebook.svg', redirectUrl: '' },
    { name: 'Instagram', imageUrl: '/assets/icons/instagram.svg', redirectUrl: '' },
    { name: 'Twitter', imageUrl: '/assets/icons/twitter.svg', redirectUrl: '' },
    { name: 'Linkedin', imageUrl: '/assets/icons/linkedin.svg', redirectUrl: '' },
    { name: 'Youtube', imageUrl: '/assets/icons/youtube.svg', redirectUrl: '' },
  ]

  handleSocialRedirect(url: string) {
    console.log(url, 'handleSocialRedirect');
  }
}
