import { Component } from '@angular/core';

@Component({
  selector: 'app-about-core-values',
  imports: [],
  templateUrl: './about-core-values.component.html',
  styleUrl: './about-core-values.component.scss'
})
export class AboutCoreValuesComponent {
  data = [
    {
      title: 'Experience-Based Learning',
      description: 'Immersive labs and programs in cutting-edge fields like AI, IoT, EV, and cybersecurity.',
      backgroundImg: '/assets/labs/core-lab.jpeg'
    },
    {
      title: 'Start-Up Support Ecosystem',
      description: 'Comprehensive resources, mentorship, and funding opportunities for entrepreneurs.',
      backgroundImg: '/assets/labs/cg-lab.png'
    },
    {
      title: 'Incubation and Innovation Centers',
      description: 'Infrastructure and guidance to turn ideas into viable business models.',
      backgroundImg: '/assets/labs/hub.jpeg'
    },
    {
      title: 'Global Collaborations',
      description: 'Partnerships with world-class universities and organizations for international learning and research.',
      backgroundImg: '/assets/labs/core-lab.jpeg'
    }
  ]
}
