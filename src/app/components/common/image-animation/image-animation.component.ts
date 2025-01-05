import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-image-animation',
  imports: [],
  templateUrl: './image-animation.component.html',
  styleUrl: './image-animation.component.scss'
})
export class ImageAnimationComponent implements OnInit, OnDestroy {
  @Input() photos: any = []

  displayImages: string[] = [];
  currentIndex = 0;
  transformStyle = 'translateX(0%)';
  transitionStyle = 'transform 0.5s ease-in-out';
  intervalId: any;

  ngOnInit(): void {
    this.displayImages = [...this.photos, ...this.photos];
    this.startCarousel();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startCarousel(): void {
    const totalImages = this.photos?.length;
    const intervalDuration = 3000;
    this.intervalId = setInterval(() => {
      this.currentIndex++;
      if (this.currentIndex === totalImages) {
        this.transitionStyle = 'none';
        this.currentIndex = 0;
      } else {
        this.transitionStyle = 'transform 2s ease-in-out';
      }
      this.transformStyle = `translateX(-${this.currentIndex * 100}%)`;
    }, intervalDuration);
  }
}
