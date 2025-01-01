import { Component } from '@angular/core';

@Component({
  selector: 'app-internship-modules',
  imports: [],
  templateUrl: './internship-modules.component.html',
  styleUrl: './internship-modules.component.scss'
})
export class InternshipModulesComponent {
  data = [
    { title: 'Hands-On Learning', description: 'Work on real-world projects in fields like AI, IoT, cybersecurity, EV, and more.' },
    { title: 'Expert Mentorship', description: 'Learn from seasoned industry professionals and academic leaders.' },
    { title: 'Skill Development', description: 'Gain practical knowledge, problem-solving abilities, and project management expertise.' },
    { title: 'Networking Opportunities', description: 'Connect with peers, industry leaders, and innovators.' },
    { title: 'Certificate of Completion', description: 'Receive recognition for your efforts and showcase your experience to potential employers.' },
  ]
}
