import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicesHomeComponent } from '../components/services/services-home/services-home.component';
import { ServicesModulesComponent } from '../components/services/services-modules/services-modules.component';

import SERVICES_DATA from '../../data/services.json'

@Component({
  selector: 'app-services',
  imports: [ServicesHomeComponent, ServicesModulesComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit, OnDestroy {
  item: any = null;
  private routeSub: Subscription | null = null

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      const serviceId = params.get('serviceId');
      if (serviceId) {
        this.item = SERVICES_DATA.filter(data => data.id === serviceId)[0]
      }
    })
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe()
    }
  }
}
