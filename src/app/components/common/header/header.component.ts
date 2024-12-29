import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) {} 

  menuOptions = [
    { name: 'Home', url: '' }, { name: 'About', url: 'about' }, { name: 'Services', url: 'services' }, { name: 'Initiatives', url: 'initiatives' },
    { name: 'Reach Us', url: 'contact' }, { name: 'Internship', url: 'internship' }
  ]

  handleRedirectMenu(name: string) {
    this.router.navigate([name])
  }

  isActiveMenu(route: string):boolean {
    return this.router.url === `/${route}`;
  }
}
