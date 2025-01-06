import { Component, Input } from '@angular/core';
import { PhotoCollageAnimationComponent } from '../../common/photo-collage-animation/photo-collage-animation.component'
import { ImageAnimationComponent } from '../../common/image-animation/image-animation.component'

@Component({
  selector: 'app-services-modules',
  imports: [PhotoCollageAnimationComponent, ImageAnimationComponent],
  templateUrl: './services-modules.component.html',
  styleUrl: './services-modules.component.scss'
})
export class ServicesModulesComponent {
  @Input() data: any;
}
