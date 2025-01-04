import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor (private router: Router) {}

  menuOptions = [
    { name: 'Home', url: '' }, { name: 'About', url: '/about' }, { name: 'Services', url: '/services/artificial-intelligence' },
    { name: 'Initiatives', url: 'initiatives', disabled: true }, { name: 'Reach Us', url: '/contact' }, { name: 'Internship', url: '/internship' }, 
  ]

  socialIcons = [
    { name: 'Facebook', imageUrl: '/assets/icons/facebook.svg', redirectUrl: '' },
    { name: 'Instagram', imageUrl: '/assets/icons/instagram.svg', redirectUrl: '' },
    { name: 'Twitter', imageUrl: '/assets/icons/twitter.svg', redirectUrl: '' },
    { name: 'Linkedin', imageUrl: '/assets/icons/linkedin.svg', redirectUrl: '' },
    { name: 'Youtube', imageUrl: '/assets/icons/youtube.svg', redirectUrl: '' },
  ]
  
  secondaryMenuOptions = [
    { name: 'Careers', url: '' }, { name: 'Privacy Policy', url: '' }, { name: 'Terms and Conditions', url: '' },
    { name: 'Corporate Governance', url: '' }, { name: 'Pedagogy Policy', url: '' }, { name: 'CSR policy', url: '' }, 
  ]

  handleRedirectMenu(name: string | null) {
    if (name !== null) {
      this.router.navigate([name])
      window.scrollTo(0, 0)
    }
  }

  handleSocialRedirect(url: string) {
    console.log(url, 'handleSocialRedirect');
  }
}
