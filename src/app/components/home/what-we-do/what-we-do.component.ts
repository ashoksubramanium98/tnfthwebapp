import { Component } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  imports: [],
  templateUrl: './what-we-do.component.html',
  styleUrl: './what-we-do.component.scss'
})
export class WhatWeDoComponent {
  timelineData = [
    {
      id: 1,
      title: 'Initial Engagement',
      description: 'Connect with our team to explore your goals and opportunities.',
      icon: '/assets/icons/technology.svg',
    },
    {
      id: 2,
      title: 'Skill Development',
      description: 'Gain hands-on experience through our specialized labs and programs.',
      icon: '/assets/icons/collaboration.svg',
    },
    {
      id: 3,
      title: 'Mentorship and Networking',
      description: 'Collaborate with experts and peers to refine your ideas.',
      icon: '/assets/icons/innovation.svg',
    },
    {
      id: 4,
      title: 'Innovation in Action',
      description: 'Apply your learning to real-world projects, internships, or research.',
      icon: '/assets/icons/support.svg',
    },
    {
      id: 5,
      title: 'Success Milestones',
      description: 'Launch your venture, secure global opportunities, or advance your career.',
      icon: '/assets/icons/innovation.svg',
    },
  ];
}
