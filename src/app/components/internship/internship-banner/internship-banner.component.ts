import { Component } from '@angular/core';
import { InternshipFormModalComponent } from '../internship-form-modal/internship-form-modal.component'

@Component({
  selector: 'app-internship-banner',
  imports: [InternshipFormModalComponent],
  templateUrl: './internship-banner.component.html',
  styleUrl: './internship-banner.component.scss'
})
export class InternshipBannerComponent {
  isModalVisible: boolean = false;
  formType: string = '';

  openModal(type: string): void {
    this.formType = type
    this.isModalVisible = true;
  }

  handleClose(): void {
    this.isModalVisible = false;
  }

  handleConfirm(): void {
    this.isModalVisible = false;
  }
}
