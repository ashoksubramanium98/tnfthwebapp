import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-service-enquiry-modal',
  imports: [],
  templateUrl: './service-enquiry-modal.component.html',
  styleUrl: './service-enquiry-modal.component.scss'
})
export class ServiceEnquiryModalComponent {

  @Input() isVisible: boolean = false;
  @Input() title: string = '';
  @Output() confirm = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.isVisible = false;
    this.close.emit();
  }

  onConfirm(): void {
    this.confirm.emit();
  }
}

