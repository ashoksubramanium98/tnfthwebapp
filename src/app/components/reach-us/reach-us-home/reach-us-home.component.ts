import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-reach-us-home',
  imports: [NgOptimizedImage],
  templateUrl: './reach-us-home.component.html',
  styleUrl: './reach-us-home.component.scss'
})
export class ReachUsHomeComponent {
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
