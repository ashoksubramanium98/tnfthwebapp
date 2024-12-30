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

  activeMenuDropdown:string | null = null;
  activeSubMenuDropdown:string | null = 'emergingTech';
  menuOptions = [
    { id: 'home', name: 'Home', subMenu: false, url: '' }, { id: 'about', name: 'About', subMenu: false, url: 'about' },
    { id: 'services', name: 'Services', subMenu: true, url: 'services' }, { id: 'initiatives', name: 'Initiatives', subMenu: false, url: 'initiatives' },
    { id: 'contact', name: 'Reach Us', subMenu: false, url: 'contact' }, { id: 'internship', name: 'Internship', subMenu: false, url: 'internship' }
  ]

  servicesMenuOptions = [
    { id: 'emergingTech', name: 'Emerging Technology Labs' }, { id: 'corporate', name: 'Corporate Experience & Collaborations' },
    { id: 'support', name: 'Start-up Support Center' }, { id: 'connect', name: 'Overseas University Connecting Center' },
    { id: 'incubation', name: 'Incubation & Innovation Center' }
  ]

  handleRedirectMenu(name: string) {
    this.router.navigate([name])
  }

  isActiveMenu(route: string):boolean {
    return this.router.url === `/${route}`;
  }

  handleShowMenuModal(menu: string): void {
    this.activeMenuDropdown = menu;
  }
  closeDropdownModal(): void {
    this.activeMenuDropdown = null;
    this.activeSubMenuDropdown = null;
  }

  handleShowSubMenuOptions(menu: string): void {
    this.activeSubMenuDropdown = menu;
  }
}
