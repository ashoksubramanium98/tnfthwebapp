import { Component, Input } from '@angular/core';
import { ServiceEnquiryModalComponent } from '../service-enquiry-modal/service-enquiry-modal.component'

@Component({
  selector: 'app-services-home',
  imports: [ServiceEnquiryModalComponent],
  templateUrl: './services-home.component.html',
  styleUrl: './services-home.component.scss'
})
export class ServicesHomeComponent {
  @Input() data: any
  isModalVisible: boolean = false;

  openModal(): void {
    this.isModalVisible = true;
  }

  handleClose(): void {
    this.isModalVisible = false;
  }

  handleConfirm(): void {
    this.isModalVisible = false;
  }
}
