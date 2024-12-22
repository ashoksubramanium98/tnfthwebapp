import { Component } from '@angular/core';
import { AboutComponent } from '../components/home/about/about.component'
import { BannerComponent } from '../components/home/banner/banner.component'
import { LabsComponent } from '../components/home/labs/labs.component'
import { PartnersComponent } from '../components/home/partners/partners.component'
import { WhatWeDoComponent } from '../components/home/what-we-do/what-we-do.component'

@Component({
  selector: 'app-home',
  imports: [AboutComponent, BannerComponent, LabsComponent, PartnersComponent, WhatWeDoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
