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
      title: 'Emerging Technology Labs',
      description: 'AI, Cyber Security, Drone, EV, IOT & Sensors, 5G and ERP.',
      icon: '/assets/icons/technology.svg',
    },
    {
      id: 2,
      title: 'Corporate Experience & Collaborations',
      description: 'Global partnerships for advanced research and education.',
      icon: '/assets/icons/collaboration.svg',
    },
    {
      id: 3,
      title: 'Incubation & Innovation Center',
      description: 'Collaborative environment with high-speed internet, meeting rooms, and printing.',
      icon: '/assets/icons/innovation.svg',
    },
    {
      id: 4,
      title: 'Start-up Support Center',
      description: 'Support for startups with funding, legal, and business resources.',
      icon: '/assets/icons/support.svg',
    },
    {
      id: 5,
      title: 'Overseas University Connecting Center',
      description: 'Global partnerships for advanced research and education.',
      icon: '/assets/icons/innovation.svg',
    },
  ];
}
