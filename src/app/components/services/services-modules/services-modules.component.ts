import { Component, Input } from '@angular/core';
import { PhotoCollageComponent } from '../../common/photo-collage/photo-collage.component'
import { ImageAnimationComponent } from '../../common/image-animation/image-animation.component'

@Component({
  selector: 'app-services-modules',
  imports: [PhotoCollageComponent, ImageAnimationComponent],
  templateUrl: './services-modules.component.html',
  styleUrl: './services-modules.component.scss'
})
export class ServicesModulesComponent {
  @Input() data: any;
}
