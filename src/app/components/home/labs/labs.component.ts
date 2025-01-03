import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labs',
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss'
})
export class LabsComponent implements OnInit {
  constructor (private router: Router) {}

  labs = [
    {
      id: 1,
      title: 'Artificial Intelligence (AI)',
      description: 'Discover the power of AI with TNFTH’s hands-on programs in machine learning, neural networks, and natural language processing. Gain the skills to create innovative, efficient solutions that transform industries.',
      icon: '/assets/icons/ai.png',
      backgroundImg: '/assets/labs/core-lab.jpeg',
      url: '/services/artificial-intelligence',
    },
    {
      id: 2,
      title: 'Cyber Security',
      description: 'Stay ahead of digital threats with TNFTH’s Cyber Security Lab. Learn ethical hacking, threat mitigation, and incident response to safeguard critical systems and data.',
      icon: '/assets/icons/security.png',
      backgroundImg: '/assets/labs/cg-lab.png',
      url: '/services/cyber-security',
    },
    {
      id: 3,
      title: 'Drone Technology',
      description: 'Explore the limitless possibilities of drones. TNFTH’s Drone Lab offers training in design, flight control, and regulatory compliance for applications across industries like logistics, agriculture, and defense.',
      icon: '/assets/icons/drone.png',
      backgroundImg: '/assets/labs/hub.jpeg',
      url: '/services/drone-technology',
    },
    {
      id: 4,
      title: 'Electric Vehicles (EV)',
      description: 'Lead the future of sustainable transportation with TNFTH’s EV Lab. Gain expertise in battery systems, energy efficiency, and smart vehicle design to excel in the growing EV industry.',
      icon: '/assets/icons/electric.png',
      backgroundImg: '/assets/labs/core-lab.jpeg',
      url: '/services/electric-vehicle-ecosystem',
    },
    {
      id: 5,
      title: 'IoT & Sensors',
      description: 'Design smarter systems with TNFTH’s IoT & Sensors Lab. Master IoT networks, sensor integration, and automation to drive data-driven decisions across industries.',
      icon: '/assets/icons/sensor.png',
      backgroundImg: '/assets/labs/cg-lab.png',
      url: '/services/iot-sensors',
    },
    {
      id: 6,
      title: '5G',
      description: 'Revolutionize connectivity and efficiency with TNFTH’s 5G and ERP Lab. Develop scalable solutions by combining the speed of 5G with ERP systems for enterprise innovation.',
      icon: '/assets/icons/5g.png',
      backgroundImg: '/assets/labs/hub.jpeg',
      url: '/services/5g-technology',
    },
    {
      id: 7,
      title: 'ERP',
      description: 'Revolutionize connectivity and efficiency with TNFTH’s 5G and ERP Lab. Develop scalable solutions by combining the speed of 5G with ERP systems for enterprise innovation.',
      icon: '/assets/icons/erp.png',
      backgroundImg: '/assets/labs/hub.jpeg',
      url: '/services/erp',
    },
    {
      id: 8,
      title: 'Corporate Gateway Lab',
      description: 'Step into a corporate environment with TNFTH’s Gateway Lab. Gain practical experience in workflows, project management, and operational strategies to excel professionally.',
      icon: '/assets/icons/corporation.png',
      backgroundImg: '/assets/labs/core-lab.jpeg',
      url: '/services/corporate-gateway-lab',
    },
    {
      id: 9,
      title: 'Corporate Experience Center',
      description: 'Bridge academia and industry at TNFTH’s Corporate Experience Center. Collaborate on real-world projects, build expertise, and expand your professional network.',
      icon: '/assets/icons/team.png',
      backgroundImg: '/assets/labs/core-lab.jpeg',
      url: '/services/corporate-experience-center',
    },
    {
      id: 10,
      title: 'Incubation & Innovation Center',
      description: 'Turn ideas into reality with TNFTH’s Incubation & Innovation Center. Access mentorship, resources, and infrastructure to develop prototypes, plan businesses, and commercialize solutions.',
      icon: '/assets/icons/erp.png',
      backgroundImg: '/assets/labs/core-lab.jpeg',
      url: '/services/incubation-innovation-center',
    },
    {
      id: 11,
      title: 'Start-up Support Center',
      description: 'Launch and scale your venture with TNFTH’s Start-up Support Center. Access mentorship, funding, and resources to navigate business complexities and achieve sustainable growth.',
      icon: '/assets/icons/erp.png',
      backgroundImg: '/assets/labs/core-lab.jpeg',
      url: '/services/start-up-support-center',
    },
    {
      id: 12,
      title: 'Overseas University Connecting Center',
      description: 'Connect globally with TNFTH’s Overseas University Connecting Center. Access international education, research, and internships to thrive in a globalized world.',
      icon: '/assets/icons/erp.png',
      backgroundImg: '/assets/labs/core-lab.jpeg',
      url: '/services/overseas-university-connecting-center',
    },
  ]

  scrollPosition = 0
  speed = 2
  intervalId = 0

  ngOnInit(): void {
    this.startInfiniteLoop()
  }

  startInfiniteLoop() {
    this.intervalId = setInterval(() => {
      this.scrollPosition += this.speed
      if (this.scrollPosition >= (this.labs.length * 350)) {
        this.scrollPosition = 0
      }
    }, 50)
  }

  pause() {
    clearInterval(this.intervalId)
  }
  
  handleRedirectMenu(name: string) {
    this.router.navigate([name])
    window.scrollTo(0, 0)
  }

  ngDestroy(): void {
    clearInterval(this.intervalId)
  }
}
