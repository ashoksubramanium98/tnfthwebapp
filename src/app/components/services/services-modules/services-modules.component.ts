import { Component, Input, ElementRef, OnDestroy, HostListener } from '@angular/core';
import { PhotoCollageAnimationComponent } from '../../common/photo-collage-animation/photo-collage-animation.component'

@Component({
  selector: 'app-services-modules',
  imports: [PhotoCollageAnimationComponent],
  templateUrl: './services-modules.component.html',
  styleUrl: './services-modules.component.scss'
})
export class ServicesModulesComponent implements OnDestroy {
  @Input() data: any;

  constructor(private elRef: ElementRef) {}
  observer: IntersectionObserver | undefined;

  ngAfterViewInit() {
    this.initializeIntersectionObserver();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const section = document.getElementById('target-section');
    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < (windowHeight + 400)) {
        this.initializeIntersectionObserver();
      }
    }
  }

  initializeIntersectionObserver() {
    const cards = this.elRef.nativeElement.querySelectorAll('.services-modules__photo');
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.5) {
            entry.target.classList.add('services-modules__photo__animate');
          }  else {
            entry.target.classList.remove('services-modules__photo__animate');
          }
        });
      },
      { threshold: 0.5 }
    );

    cards.forEach((card: Element) => this.observer?.observe(card));
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
