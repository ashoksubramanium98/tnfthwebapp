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
      title: 'Artificial Intelligence (AI)',
      description: 'Discover the power of AI with TNFTH’s hands-on programs in machine learning, neural networks, and natural language processing. Gain the skills to create innovative, efficient solutions that transform industries.',
      icon: '/assets/icons/ai.svg',
      backgroundImg: '/assets/labs/core-lab.jpeg',
      url: '',
    },
    {
      title: 'Cyber Security',
      description: 'Stay ahead of digital threats with TNFTH’s Cyber Security Lab. Learn ethical hacking, threat mitigation, and incident response to safeguard critical systems and data.',
      icon: '/assets/icons/cyber.svg',
      backgroundImg: '/assets/labs/cg-lab.png',
      url: '',
    },
    {
      title: 'Drone Technology',
      description: 'Explore the limitless possibilities of drones. TNFTH’s Drone Lab offers training in design, flight control, and regulatory compliance for applications across industries like logistics, agriculture, and defense.',
      icon: '/assets/icons/drone.svg',
      backgroundImg: '/assets/labs/hub.jpeg',
      url: '',
    },
    {
      title: 'Electric Vehicles (EV)',
      description: 'Lead the future of sustainable transportation with TNFTH’s EV Lab. Gain expertise in battery systems, energy efficiency, and smart vehicle design to excel in the growing EV industry.',
      icon: '/assets/icons/electric.svg',
      backgroundImg: '/assets/labs/core-lab.jpeg',
      url: '',
    },
    {
      title: 'IoT & Sensors',
      description: 'Design smarter systems with TNFTH’s IoT & Sensors Lab. Master IoT networks, sensor integration, and automation to drive data-driven decisions across industries.',
      icon: '/assets/icons/5g.svg',
      backgroundImg: '/assets/labs/cg-lab.png',
      url: '',
    },
    {
      title: '5G and ERP',
      description: 'Revolutionize connectivity and efficiency with TNFTH’s 5G and ERP Lab. Develop scalable solutions by combining the speed of 5G with ERP systems for enterprise innovation.',
      icon: '/assets/icons/erp.svg',
      backgroundImg: '/assets/labs/hub.jpeg',
      url: '',
    },
    {
      title: 'Corporate Gateway Lab',
      description: 'Step into a corporate environment with TNFTH’s Gateway Lab. Gain practical experience in workflows, project management, and operational strategies to excel professionally.',
      icon: '/assets/icons/erp.svg',
      backgroundImg: '/assets/labs/core-lab.jpeg',
      url: '',
    },
    {
      title: 'Corporate Experience Center',
      description: 'Bridge academia and industry at TNFTH’s Corporate Experience Center. Collaborate on real-world projects, build expertise, and expand your professional network.',
      icon: '/assets/icons/erp.svg',
      backgroundImg: '/assets/labs/core-lab.jpeg',
      url: '',
    },
    {
      title: 'Incubation & Innovation Center',
      description: 'Turn ideas into reality with TNFTH’s Incubation & Innovation Center. Access mentorship, resources, and infrastructure to develop prototypes, plan businesses, and commercialize solutions.',
      icon: '/assets/icons/erp.svg',
      backgroundImg: '/assets/labs/core-lab.jpeg',
      url: '',
    },
    {
      title: 'Start-up Support Center',
      description: 'Launch and scale your venture with TNFTH’s Start-up Support Center. Access mentorship, funding, and resources to navigate business complexities and achieve sustainable growth.',
      icon: '/assets/icons/erp.svg',
      backgroundImg: '/assets/labs/core-lab.jpeg',
      url: '',
    },
    {
      title: 'Overseas University Connecting Center',
      description: 'Connect globally with TNFTH’s Overseas University Connecting Center. Access international education, research, and internships to thrive in a globalized world.',
      icon: '/assets/icons/erp.svg',
      backgroundImg: '/assets/labs/core-lab.jpeg',
      url: '',
    },
  ]

  activePagination = 1
  scrollPosition = 0
  speed = 400

  handleNextLabs() {
    this.activePagination += 1
    this.scrollPosition += this.speed
  }

  handlePreviousLabs() {
    this.activePagination -= 1
    this.scrollPosition -= this.speed
  }
}
