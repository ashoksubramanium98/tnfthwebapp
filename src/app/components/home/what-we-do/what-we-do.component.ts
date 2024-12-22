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
      title: 'Corporate Experience & Collaborations',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      icon: '/assets/icons/collaboration.svg',
    },
    {
      id: 2,
      title: 'Emerging Technology Labs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      icon: '/assets/icons/technology.svg',
    },
    {
      id: 3,
      title: 'Start-up Support Center',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      icon: '/assets/icons/support.svg',
    },
    {
      id: 4,
      title: 'Incubation & Innovation Center',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      icon: '/assets/icons/innovation.svg',
    },
  ];
}
