import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-modules',
  imports: [],
  templateUrl: './services-modules.component.html',
  styleUrl: './services-modules.component.scss'
})
export class ServicesModulesComponent {
  @Input() data: any;
}
