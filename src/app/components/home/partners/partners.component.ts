import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-partners',
  imports: [],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent implements OnInit {
  logoUrls = [
    { id: 1, url: '/assets/partners/ict.png', alt: 'ICT' }, { id: 2, url: '/assets/partners/ueducate.png', alt: 'UEducate' },
    { id: 3, url: '/assets/partners/dell.png', alt: 'Dell' }, { id: 4, url: '/assets/partners/cybertronium.png', alt: 'Cybertronium' },
    { id: 5, url: '/assets/partners/avl.png', alt: 'AVL' }, { id: 6, url: '/assets/partners/odoo.png', alt: 'Odoo' },
    { id: 7, url: '/assets/partners/ict.png', alt: 'ICT' }, { id: 8, url: '/assets/partners/ueducate.png', alt: 'UEducate' }, 
    { id: 9, url: '/assets/partners/dell.png', alt: 'Dell' }, { id: 10, url: '/assets/partners/cybertronium.png', alt: 'Cybertronium' },
    { id: 11, url: '/assets/partners/avl.png', alt: 'AVL' }, { id: 12, url: '/assets/partners/odoo.png', alt: 'Odoo' },
    
    { id: 13, url: '/assets/partners/ict.png', alt: 'ICT' }, { id: 14, url: '/assets/partners/ueducate.png', alt: 'UEducate' }, 
    { id: 15, url: '/assets/partners/dell.png', alt: 'Dell' }, { id: 16, url: '/assets/partners/cybertronium.png', alt: 'Cybertronium' },
    { id: 17, url: '/assets/partners/avl.png', alt: 'AVL' }, { id: 18, url: '/assets/partners/odoo.png', alt: 'Odoo' },
    { id: 19, url: '/assets/partners/ict.png', alt: 'ICT' }, { id: 20, url: '/assets/partners/ueducate.png', alt: 'UEducate' }, 
    { id: 21, url: '/assets/partners/dell.png', alt: 'Dell' }, { id: 22, url: '/assets/partners/cybertronium.png', alt: 'Cybertronium' },
    { id: 23, url: '/assets/partners/avl.png', alt: 'AVL' }, { id: 24, url: '/assets/partners/odoo.png', alt: 'Odoo' }
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
      if (this.scrollPosition >= (this.logoUrls.length * 200 / 6)) {
        this.scrollPosition = 0
      }
    }, 40)
  }

  pause() {
    clearInterval(this.intervalId)
  }

  ngDestroy(): void {
    clearInterval(this.intervalId)
  }
}
