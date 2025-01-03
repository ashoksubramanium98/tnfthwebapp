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
    { id: 'services', name: 'Services', subMenu: true, url: null }, { id: 'initiatives', name: 'Initiatives', subMenu: false, url: 'initiatives' },
    { id: 'contact', name: 'Reach Us', subMenu: false, url: 'contact' }, { id: 'internship', name: 'Internship', subMenu: false, url: 'internship' }
  ]

  servicesMenuOptions = [
    { id: 'emergingTech', name: 'Emerging Technology Labs', url: null }, { id: 'corporate', name: 'Corporate Experience & Collaborations', url: null },
    { id: 'support', name: 'Start-up Support Center', url: 'services/start-up-support-center' },
    { id: 'connect', name: 'Overseas University Connecting Center', url: 'services/overseas-university-connecting-center' },
    { id: 'incubation', name: 'Incubation & Innovation Center', url: 'services/incubation-innovation-center' }
  ]

  emergingTechMenuOptions = [
    { name: 'Artificial Intelligence', icon: '/assets/icons/ai.png', url: 'services/artificial-intelligence' },
    { name: 'Cyber Security', icon: '/assets/icons/security.png', url: 'services/cyber-security' },
    { name: 'Drone Technology', icon: '/assets/icons/drone.png', url: 'services/drone-technology' },
    { name: 'Electric Vehicle Ecosystem', icon: '/assets/icons/electric.png', url: 'services/electric-vehicle-ecosystem' },
    { name: 'IoT & Sensors', icon: '/assets/icons/sensor.png', url: 'services/iot-sensors' },
    { name: '5G', icon: '/assets/icons/5g.png', url: 'services/5g-technology' },
    { name: 'ERP', icon: '/assets/icons/erp.png', url: 'services/erp' }
  ]

  corporateMenuOptions = [
    { name: 'Corporate Gateway Lab', icon: '/assets/icons/corporation.png', url: 'services/corporate-gateway-lab' },
    { name: 'Corporate Experience Center', icon: '/assets/icons/team.png', url: 'services/corporate-experience-center' }
  ]

  handleRedirectMenu(name: string | null) {
    if (name !== null) {
      this.router.navigate([name])
      window.scrollTo(0, 0)
      this.closeDropdownModal()
    }
  }

  isActiveMenu(route: string | null):boolean {
    return route === null ? this.router.url.includes('services') : this.router.url === `/${route}`;
  }

  handleShowMenuModal(menu: string): void {
    this.activeMenuDropdown = menu;
    if (menu === this.menuOptions[2].id) {
      this.activeSubMenuDropdown = 'emergingTech'
    }
  }
  closeDropdownModal(): void {
    this.activeMenuDropdown = null;
    this.activeSubMenuDropdown = null;
  }

  handleShowSubMenuOptions(menu: string): void {
    this.activeSubMenuDropdown = menu;
  }
}
