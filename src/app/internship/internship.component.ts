import { Component } from '@angular/core';
import { InternshipHomeComponent } from '../components/internship/internship-home/internship-home.component';
import { InternshipModulesComponent } from '../components/internship/internship-modules/internship-modules.component';
import { InternshipBannerComponent } from '../components/internship/internship-banner/internship-banner.component';

@Component({
  selector: 'app-internship',
  imports: [InternshipHomeComponent, InternshipModulesComponent, InternshipBannerComponent],
  templateUrl: './internship.component.html',
  styleUrl: './internship.component.scss'
})
export class InternshipComponent {

}
