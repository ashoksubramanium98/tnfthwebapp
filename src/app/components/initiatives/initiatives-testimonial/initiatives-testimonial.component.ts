import { Component } from '@angular/core';

@Component({
  selector: 'app-initiatives-testimonial',
  imports: [],
  templateUrl: './initiatives-testimonial.component.html',
  styleUrl: './initiatives-testimonial.component.scss'
})
export class InitiativesTestimonialComponent {
  dataArr = [
    {
      id: 1,
      date: 'May 8, 2020',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: 'Foundational knowledge and technical training for each technology field to ensure industry readiness.',
      picture: '/assets/labs/core-lab.jpeg',
    },
    {
      id: 2,
      date: 'May 8, 2020',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: 'To equip students with essential life skills, behavioral competencies, and workplace readiness to succeed in corporate environments, bridging the gap between technical expertise and professional excellence.',
      picture: '/assets/labs/cg-lab.png',
    },
    {
      id: 3,
      date: 'May 8, 2020',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: 'Real-world skill application through live projects, problem-solving tasks, and innovation challenges in a simulated professional environment.',
      picture: '/assets/labs/hub.jpeg',
    },
    {
      id: 4,
      date: 'May 8, 2020',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: 'Foundational knowledge and technical training for each technology field to ensure industry readiness.',
      picture: '/assets/labs/core-lab.jpeg',
    },
    {
      id: 5,
      date: 'May 8, 2020',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: 'To equip students with essential life skills, behavioral competencies, and workplace readiness to succeed in corporate environments, bridging the gap between technical expertise and professional excellence.',
      picture: '/assets/labs/cg-lab.png',
    },
    {
      id: 6,
      date: 'May 8, 2020',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: 'Real-world skill application through live projects, problem-solving tasks, and innovation challenges in a simulated professional environment.',
      picture: '/assets/labs/hub.jpeg',
    },
    {
      id: 7,
      date: 'May 8, 2020',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: 'Foundational knowledge and technical training for each technology field to ensure industry readiness.',
      picture: '/assets/labs/core-lab.jpeg',
    },
  ]

  activePagination = 1
  scrollPosition = 0
  speed = 555

  handleNextInitiativesTestimonial() {
    this.activePagination += 1
    this.scrollPosition += this.speed
  }

  handlePreviousInitiativesTestimonial() {
    this.activePagination -= 1
    this.scrollPosition -= this.speed
  }
}
