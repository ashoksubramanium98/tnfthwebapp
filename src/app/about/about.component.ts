import { Component } from '@angular/core';
import { AboutHomeComponent } from '../components/about/about-home/about-home.component';
import { PhotoCollageComponent } from '../components/common/photo-collage/photo-collage.component'
import { AboutCoreValuesComponent } from '../components/about/about-core-values/about-core-values.component';
import { AboutBannerComponent } from '../components/about/about-banner/about-banner.component';
import { AboutWhyComponent } from '../components/about/about-why/about-why.component';
import { PartnersComponent } from '../components/home/partners/partners.component';

@Component({
  selector: 'app-about',
  imports: [AboutHomeComponent, PhotoCollageComponent, AboutCoreValuesComponent, AboutBannerComponent, AboutWhyComponent, PartnersComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  photos = [
    '/assets/elcot/1.jpg', '/assets/elcot/2.jpg', '/assets/elcot/3.jpg', '/assets/elcot/4.jpg', '/assets/elcot/5.jpg', '/assets/elcot/6.jpg',
    '/assets/elcot/7.jpg', '/assets/elcot/8.jpg', '/assets/elcot/9.jpg', '/assets/elcot/10.jpg', '/assets/elcot/11.jpg', '/assets/elcot/12.jpg',
    '/assets/elcot/13.jpg', '/assets/elcot/14.jpg', '/assets/elcot/15.jpg', '/assets/elcot/16.jpg', '/assets/elcot/17.jpg', '/assets/elcot/18.jpg'
  ];
}
