import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  imports: [],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {
  logoUrls = [
    { url: '/assets/partners/lightbox.png', alt: 'Light Box' }, { url: '/assets/partners/globalBank.png', alt: 'Global Bank' },
    { url: '/assets/partners/boltShit.png', alt: 'Bolt Shit' }, { url: '/assets/partners/nietzsche.png', alt: 'Nietzsche' },
    { url: '/assets/partners/featherDev.png', alt: 'Feather Dev' }, { url: '/assets/partners/globalBank.png', alt: 'Global Bank' },
    { url: '/assets/partners/lightbox.png', alt: 'Light Box' }, { url: '/assets/partners/spherule.png', alt: 'Spherule' } 
  ]
}
