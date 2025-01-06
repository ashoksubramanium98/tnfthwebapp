import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-collage-animation',
  imports: [],
  templateUrl: './photo-collage-animation.component.html',
  styleUrl: './photo-collage-animation.component.scss'
})
export class PhotoCollageAnimationComponent {
  @Input() photos: string[] = []
}
