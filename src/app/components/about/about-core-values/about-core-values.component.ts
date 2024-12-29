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
      title: 'ARTIFICIAL INTELLIGENCE',
      description: 'Foundational knowledge and technical training for each technology field to ensure industry readiness.',
      backgroundImg: '/assets/labs/core-lab.jpeg',
      url: '',
    },
    {
      title: 'CYBER SECURITY',
      description: 'To equip students with essential life skills, behavioral competencies, and workplace readiness to succeed in corporate environments, bridging the gap between technical expertise and professional excellence.',
      backgroundImg: '/assets/labs/cg-lab.png',
      url: '',
    },
    {
      title: 'DRONE TECHNOLOGY',
      description: 'Real-world skill application through live projects, problem-solving tasks, and innovation challenges in a simulated professional environment.',
      backgroundImg: '/assets/labs/hub.jpeg',
      url: '',
    },
  ]
}
