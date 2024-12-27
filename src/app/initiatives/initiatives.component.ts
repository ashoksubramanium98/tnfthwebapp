import { Component } from '@angular/core';
import { InitiativesHomeComponent } from '../components/initiatives/initiatives-home/initiatives-home.component';
import { InitiativesFeaturesComponent } from '../components/initiatives/initiatives-features/initiatives-features.component';
import { InitiativesTestimonialComponent } from '../components/initiatives/initiatives-testimonial/initiatives-testimonial.component';
import { PartnersComponent } from '../components/home/partners/partners.component'

@Component({
  selector: 'app-initiatives',
  imports: [InitiativesHomeComponent, InitiativesFeaturesComponent, InitiativesTestimonialComponent, PartnersComponent],
  templateUrl: './initiatives.component.html',
  styleUrl: './initiatives.component.scss'
})
export class InitiativesComponent {

}
