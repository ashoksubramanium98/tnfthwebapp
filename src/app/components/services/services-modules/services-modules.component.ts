import { Component, Input } from '@angular/core';
import { PhotoCollageComponent } from '../../common/photo-collage/photo-collage.component'

@Component({
  selector: 'app-services-modules',
  imports: [PhotoCollageComponent],
  templateUrl: './services-modules.component.html',
  styleUrl: './services-modules.component.scss'
})
export class ServicesModulesComponent {
  @Input() data: any;
}
