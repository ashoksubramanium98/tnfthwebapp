import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about-why',
  imports: [],
  templateUrl: './about-why.component.html',
  styleUrl: './about-why.component.scss'
})
export class AboutWhyComponent implements AfterViewInit {

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

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.5) {
            entry.target.classList.add('about-why__visible');
          }  else {
            entry.target.classList.remove('about-why__visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('.about-why__content, .about-why__video');
    sections.forEach(section => observer.observe(section));
  }
}
