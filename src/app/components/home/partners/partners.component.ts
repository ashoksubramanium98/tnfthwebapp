import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-partners',
  imports: [],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent implements OnInit {
  logoUrls = [
    { id: 1, url: '/assets/partners/lightbox.png', alt: 'Light Box' }, { id: 2, url: '/assets/partners/globalBank.png', alt: 'Global Bank' },
    { id: 3, url: '/assets/partners/boltShit.png', alt: 'Bolt Shit' }, { id: 4, url: '/assets/partners/nietzsche.png', alt: 'Nietzsche' },
    { id: 5, url: '/assets/partners/featherDev.png', alt: 'Feather Dev' }, { id: 6, url: '/assets/partners/globalBank.png', alt: 'Global Bank' },
    { id: 7, url: '/assets/partners/lightbox.png', alt: 'Light Box' }, { id: 8, url: '/assets/partners/spherule.png', alt: 'Spherule' } 
  ]

  logoUrls2 = [
    { id: 9, url: '/assets/partners/lightbox.png', alt: 'Light Box' }, { id: 10, url: '/assets/partners/globalBank.png', alt: 'Global Bank' },
    { id: 11, url: '/assets/partners/boltShit.png', alt: 'Bolt Shit' }, { id: 12, url: '/assets/partners/nietzsche.png', alt: 'Nietzsche' },
    { id: 13, url: '/assets/partners/featherDev.png', alt: 'Feather Dev' }, { id: 14, url: '/assets/partners/globalBank.png', alt: 'Global Bank' },
    { id: 15, url: '/assets/partners/lightbox.png', alt: 'Light Box' }, { id: 16, url: '/assets/partners/spherule.png', alt: 'Spherule' } 
  ]

  scrollPosition = 0
  speed = 2
  intervalId = 0

  ngOnInit(): void {
    this.startInfiniteLoop()
  }

  startInfiniteLoop() {
    this.logoUrls = [...this.logoUrls, ...this.logoUrls2]
    this.intervalId = setInterval(() => {
      this.scrollPosition += this.speed
      if (this.scrollPosition >= (this.logoUrls.length * 200 / 4)) {
        this.scrollPosition = 0
      }
    }, 25)
  }

  pause() {
    clearInterval(this.intervalId)
  }

  ngDestroy(): void {
    clearInterval(this.intervalId)
  }
}
