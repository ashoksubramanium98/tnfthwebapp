import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-internship-modules',
  imports: [],
  templateUrl: './internship-modules.component.html',
  styleUrl: './internship-modules.component.scss'
})
export class InternshipModulesComponent implements OnInit, OnDestroy {
  whyJoinImages = [
    '/assets/images/internship/whyJoin1.jpg', '/assets/images/internship/whyJoin2.jpg', '/assets/images/internship/whyJoin3.jpg',
    '/assets/images/internship/whyJoin4.jpg', '/assets/images/internship/whyJoin5.jpg'
  ]

  data = [
    { title: 'Hands-On Learning', description: 'Work on real-world projects in fields like AI, IoT, cybersecurity, EV, and more.' },
    { title: 'Expert Mentorship', description: 'Learn from seasoned industry professionals and academic leaders.' },
    { title: 'Skill Development', description: 'Gain practical knowledge, problem-solving abilities, and project management expertise.' },
    { title: 'Networking Opportunities', description: 'Connect with peers, industry leaders, and innovators.' },
    { title: 'Certificate of Completion', description: 'Receive recognition for your efforts and showcase your experience to potential employers.' },
  ]

  displayImages: string[] = [];
  currentIndex = 0;
  transformStyle = 'translateX(0%)';
  transitionStyle = 'transform 0.5s ease-in-out';
  intervalId: any;

  ngOnInit(): void {
    this.displayImages = [...this.whyJoinImages, ...this.whyJoinImages];
    this.startCarousel();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startCarousel(): void {
    const totalImages = this.whyJoinImages.length;
    const intervalDuration = 3000; // 3 seconds per slide

    this.intervalId = setInterval(() => {
      this.currentIndex++;

      if (this.currentIndex === totalImages) {
        // Remove transition for instant jump and reset index
        this.transitionStyle = 'none';
        this.currentIndex = 0;
      } else {
        // Smooth transition for normal slide
        this.transitionStyle = 'transform 2s ease-in-out';
      }

      // Update transform style
      this.transformStyle = `translateX(-${this.currentIndex * 100}%)`;
    }, intervalDuration);
  }
}
