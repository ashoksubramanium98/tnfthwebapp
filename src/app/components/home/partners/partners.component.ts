import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-partners',
  imports: [],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent implements OnInit {
  logoUrls = [
    { url: '/assets/partners/lightbox.png', alt: 'Light Box' }, { url: '/assets/partners/globalBank.png', alt: 'Global Bank' },
    { url: '/assets/partners/boltShit.png', alt: 'Bolt Shit' }, { url: '/assets/partners/nietzsche.png', alt: 'Nietzsche' },
    { url: '/assets/partners/featherDev.png', alt: 'Feather Dev' }, { url: '/assets/partners/globalBank.png', alt: 'Global Bank' },
    { url: '/assets/partners/lightbox.png', alt: 'Light Box' }, { url: '/assets/partners/spherule.png', alt: 'Spherule' } 
  ]

  scrollPosition = 0
  speed = 2
  intervalId = 0

  ngOnInit(): void {
    this.startInfiniteLoop()
  }

  startInfiniteLoop() {
    this.logoUrls = [...this.logoUrls, ...this.logoUrls]
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
