import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-home',
  imports: [],
  templateUrl: './services-home.component.html',
  styleUrl: './services-home.component.scss'
})
export class ServicesHomeComponent {
  @Input() data: any
}
