import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InitiativesComponent } from './initiatives/initiatives.component';
import { InternshipComponent } from './internship/internship.component';
import { ServicesComponent } from './services/services.component';
import { ReachUsComponent } from './reach-us/reach-us.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },
  {
    path: 'initiatives',
    component: InitiativesComponent,
    title: 'Initiatives',
  },
  {
    path: 'internship',
    component: InternshipComponent,
    title: 'Internship',
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'Services',
  },
  {
    path: 'contact',
    component: ReachUsComponent,
    title: 'Reach us',
  },
];
