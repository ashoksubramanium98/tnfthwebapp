import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-collage',
  imports: [],
  templateUrl: './photo-collage.component.html',
  styleUrl: './photo-collage.component.scss'
})
export class PhotoCollageComponent {
  @Input() photos: string[] = []
  
  hoveredPhoto: any = null;
  hoverStyle: any = {};

  hoverImage(photo: any, event: MouseEvent): void {
    this.hoveredPhoto = photo;

    const { clientX, clientY } = event;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let transformX = 0;
    let transformY = 0;

    // Check proximity to right edge
    if (clientX > viewportWidth - 150) {
      transformX = -100; // Shift left
    }

    // Check proximity to left edge
    if (clientX < 150) {
      transformX = 100; // Shift right
    }

    // Check proximity to bottom edge
    if (clientY > viewportHeight - 150) {
      transformY = -100; // Shift up
    }

    // Apply styles to ensure the image is fully visible
    this.hoverStyle = {
      transform: `scale(2) translate(${transformX}px, ${transformY}px)`,
      zIndex: 10
    };
  }

  leaveImage(): void {
    this.hoveredPhoto = null;
    this.hoverStyle = {};
  }
}
