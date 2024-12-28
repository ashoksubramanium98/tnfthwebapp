import { Component } from '@angular/core';
import { ServicesHomeComponent } from '../components/services/services-home/services-home.component';
import { ServicesModulesComponent } from '../components/services/services-modules/services-modules.component';

@Component({
  selector: 'app-services',
  imports: [ServicesHomeComponent, ServicesModulesComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
