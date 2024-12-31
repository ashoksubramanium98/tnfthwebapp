import { Component } from '@angular/core';

@Component({
  selector: 'app-about-why',
  imports: [],
  templateUrl: './about-why.component.html',
  styleUrl: './about-why.component.scss'
})
export class AboutWhyComponent {
  data = [
    {
      title: 'Industry Partnerships',
      description: 'Collaborate with leading corporations, academic institutions, and research organizations.',
      backgroundImg: '/assets/labs/core-lab.jpeg'
    },
    {
      title: 'Global Reach',
      description: 'Access opportunities for international internships, research, and academic programs.',
      backgroundImg: '/assets/labs/cg-lab.png'
    },
    {
      title: 'Future-Ready Skills',
      description: 'Gain expertise in emerging technologies to thrive in competitive industries.',
      backgroundImg: '/assets/labs/hub.jpeg'
    }
  ]
}
