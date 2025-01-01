import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-partners',
  imports: [],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent implements OnInit {
  logoUrls = [
    { id: 1, url: '/assets/partners/ict.jpeg', alt: 'Global Bank' }, { id: 2, url: '/assets/partners/ueducate.jpeg', alt: 'Light Box' },
    { id: 3, url: '/assets/partners/dell.jpeg', alt: 'Bolt Shit' }, { id: 4, url: '/assets/partners/cybertronium.jpeg', alt: 'Nietzsche' },
    { id: 5, url: '/assets/partners/avl.jpeg', alt: 'Feather Dev' }, { id: 6, url: '/assets/partners/ict.jpeg', alt: 'Global Bank' },
    { id: 7, url: '/assets/partners/ueducate.jpeg', alt: 'Light Box' }, { id: 8, url: '/assets/partners/dell.jpeg', alt: 'Bolt Shit' },
    { id: 9, url: '/assets/partners/cybertronium.jpeg', alt: 'Nietzsche' }, { id: 10, url: '/assets/partners/avl.jpeg', alt: 'Feather Dev' }
  ]

  scrollPosition = 0
  speed = 2
  intervalId = 0

  ngOnInit(): void {
    this.startInfiniteLoop()
  }

  startInfiniteLoop() {
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
