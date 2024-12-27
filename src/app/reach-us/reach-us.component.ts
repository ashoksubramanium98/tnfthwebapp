import { Component } from '@angular/core';
import { ReachUsHomeComponent } from '../components/reach-us/reach-us-home/reach-us-home.component';
import { ReachUsFormComponent } from '../components/reach-us/reach-us-form/reach-us-form.component';

@Component({
  selector: 'app-reach-us',
  imports: [ReachUsHomeComponent, ReachUsFormComponent],
  templateUrl: './reach-us.component.html',
  styleUrl: './reach-us.component.scss'
})
export class ReachUsComponent {

}
