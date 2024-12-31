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

  emergingTechMenuOptions = [
    { name: 'Artificial Intelligence', icon: '/assets/icons/ai.png', url: 'services/artificial-intelligence' },
    { name: 'Cyber Security', icon: '/assets/icons/security.png', url: 'services/cyber-security' },
    { name: 'Drone Technology', icon: '/assets/icons/drone.png', url: 'services/drone-technology' },
    { name: 'Electric Vehicle Ecosystem', icon: '/assets/icons/electric.png', url: 'services/electric-vehicle-ecosystem' },
    { name: '5G Technology', icon: '/assets/icons/5g.png', url: 'services/5g-technology' },
    { name: 'ERP', icon: '/assets/icons/erp.png', url: 'services/erp' }
  ]

  corporateMenuOptions = [
    { name: 'Corporate Gateway Lab', icon: '/assets/icons/ai.png', url: 'services/corporate-gateway-lab' },
    { name: 'Corporate Experience Center', icon: '/assets/icons/security.png', url: 'services/corporate-experience-center' }
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
