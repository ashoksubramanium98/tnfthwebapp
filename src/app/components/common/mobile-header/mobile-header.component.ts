import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-header',
  imports: [NgOptimizedImage],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss'
})
export class MobileHeaderComponent {
  constructor (private router: Router) {}

  isMenuOpen = false;
  activeMenuDropdown:string | null = null;
  activeSubMenuDropdown:string | null = 'emergingTech';

  menuOptions = [
    { id: 'home', name: 'Home', subMenu: false, url: '' }, { id: 'about', name: 'About', subMenu: false, url: 'about' },
    { id: 'services', name: 'Services', subMenu: true, url: null }, { id: 'initiatives', name: 'Initiatives', subMenu: false, url: 'initiatives' },
    { id: 'contact', name: 'Reach Us', subMenu: false, url: 'contact' }, { id: 'internship', name: 'Internship', subMenu: false, url: 'internship' }
  ]

  servicesMenuOptions = [
    { id: 'emergingTech', name: 'Emerging Technology Labs', url: null, options: [
      { name: 'Artificial Intelligence', icon: '/assets/icons/ai.png', url: 'services/artificial-intelligence' },
      { name: 'Cyber Security', icon: '/assets/icons/security.png', url: 'services/cyber-security' },
      { name: 'Drone Technology', icon: '/assets/icons/drone.png', url: 'services/drone-technology' },
      { name: 'Electric Vehicle Ecosystem', icon: '/assets/icons/electric.png', url: 'services/electric-vehicle-ecosystem' },
      { name: 'IoT & Sensors', icon: '/assets/icons/sensor.png', url: 'services/iot-sensors' },
      { name: '5G', icon: '/assets/icons/5g.png', url: 'services/5g-technology' },
      { name: 'ERP', icon: '/assets/icons/erp.png', url: 'services/erp' }
    ] },
    { id: 'corporate', name: 'Corporate Experience & Collaborations', url: null, options: [
      { name: 'Corporate Gateway Lab', icon: '/assets/icons/corporation.png', url: 'services/corporate-gateway-lab' },
      { name: 'Corporate Experience Center', icon: '/assets/icons/team.png', url: 'services/corporate-experience-center' }
    ] },
    { id: 'support', name: 'Start-up Support Center', url: 'services/start-up-support-center' },
    { id: 'connect', name: 'Overseas University Connecting Center', url: 'services/overseas-university-connecting-center' },
    { id: 'incubation', name: 'Incubation & Innovation Center', url: 'services/incubation-innovation-center' }
  ]

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  handleRedirectMenu(name: string | null, subMenu?: boolean) {
    if (subMenu) {
      this.activeMenuDropdown = 'services'
    } else if (name !== null) {
      this.isMenuOpen = !this.isMenuOpen;
      this.router.navigate([name])
      window.scrollTo(0, 0)
    }
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
