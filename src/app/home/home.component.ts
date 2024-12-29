import { Component, HostListener } from '@angular/core';
import { HeroComponent } from '../components/home/hero/hero.component'
import { AboutComponent } from '../components/home/about/about.component'
import { WhatWeDoComponent } from '../components/home/what-we-do/what-we-do.component'
import { LabsComponent } from '../components/home/labs/labs.component'
import { PartnersComponent } from '../components/home/partners/partners.component'

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, WhatWeDoComponent, LabsComponent, PartnersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isComponentEnabled = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const offset = window.pageYOffset;
    const targetOffset = 900;
    if (offset >= targetOffset) {
      this.isComponentEnabled = true;
    }
  }
}
