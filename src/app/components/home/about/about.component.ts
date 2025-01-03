import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.5) {
            entry.target.classList.add('about__visible');
          }  else {
            entry.target.classList.remove('about__visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('.about__content, .about__img-container');
    sections.forEach(section => observer.observe(section));
  }
}
