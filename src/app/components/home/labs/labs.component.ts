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
      title: 'ARTIFICIAL INTELLIGENCE',
      description: 'Foundational knowledge and technical training for each technology field to ensure industry readiness.',
      icon: '/assets/icons/ai.svg',
      backgroundImg: '/assets/labs/core-lab.jpeg',
      url: '',
    },
    {
      title: 'CYBER SECURITY',
      description: 'To equip students with essential life skills, behavioral competencies, and workplace readiness to succeed in corporate environments, bridging the gap between technical expertise and professional excellence.',
      icon: '/assets/icons/cyber.svg',
      backgroundImg: '/assets/labs/cg-lab.png',
      url: '',
    },
    {
      title: 'DRONE TECHNOLOGY',
      description: 'Real-world skill application through live projects, problem-solving tasks, and innovation challenges in a simulated professional environment.',
      icon: '/assets/icons/drone.svg',
      backgroundImg: '/assets/labs/hub.jpeg',
      url: '',
    },
    {
      title: 'ELECTRIC VEHICLE ECOSYSTEM',
      description: 'Foundational knowledge and technical training for each technology field to ensure industry readiness.',
      icon: '/assets/icons/electric.svg',
      backgroundImg: '/assets/labs/core-lab.jpeg',
      url: '',
    },
    {
      title: '5G TECHNOLOGY',
      description: 'To equip students with essential life skills, behavioral competencies, and workplace readiness to succeed in corporate environments, bridging the gap between technical expertise and professional excellence.',
      icon: '/assets/icons/5g.svg',
      backgroundImg: '/assets/labs/cg-lab.png',
      url: '',
    },
    {
      title: 'ERP',
      description: 'Real-world skill application through live projects, problem-solving tasks, and innovation challenges in a simulated professional environment.',
      icon: '/assets/icons/erp.svg',
      backgroundImg: '/assets/labs/hub.jpeg',
      url: '',
    },
    {
      title: 'LOREM IPSUM',
      description: 'Foundational knowledge and technical training for each technology field to ensure industry readiness.',
      icon: '/assets/icons/erp.svg',
      backgroundImg: '/assets/labs/core-lab.jpeg',
      url: '',
    },
  ]

  activePagination = 1
  scrollPosition = 0
  speed = 1000

  handleNextLabs() {
    this.activePagination += 1
    this.scrollPosition += this.speed
  }

  handlePreviousLabs() {
    this.activePagination -= 1
    this.scrollPosition -= this.speed
  }
}
