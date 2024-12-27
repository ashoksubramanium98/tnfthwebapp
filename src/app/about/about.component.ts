import { Component } from '@angular/core';
import { AboutHomeComponent } from '../components/about/about-home/about-home.component';
import { AboutBannerComponent } from '../components/about/about-banner/about-banner.component';
import { AboutCoreValuesComponent } from '../components/about/about-core-values/about-core-values.component';
import { PartnersComponent } from '../components/home/partners/partners.component';

@Component({
  selector: 'app-about',
  imports: [AboutHomeComponent, AboutBannerComponent, AboutCoreValuesComponent, PartnersComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
