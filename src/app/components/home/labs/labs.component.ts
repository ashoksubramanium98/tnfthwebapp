import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss'
})
export class LabsComponent {
  labs = [
    {
      title: 'Core Lab',
      description: 'Foundational knowledge and technical training for each technology field to ensure industry readiness.',
      backgroundImg: '/assets/labs/core-lab.jpeg',
      url: '',
    },
    {
      title: 'CG Lab',
      description: 'Collaborative activities like team projects, group discussions, and peer-learning exercises to foster teamwork and innovation.',
      backgroundImg: '/assets/labs/cg-lab.png',
      url: '',
    },
    {
      title: 'Hub',
      description: 'Real-world skill application through live projects, problem-solving tasks, and innovation challenges in a simulated professional environment.',
      backgroundImg: '/assets/labs/hub.jpeg',
      url: '',
    }
  ]
}
