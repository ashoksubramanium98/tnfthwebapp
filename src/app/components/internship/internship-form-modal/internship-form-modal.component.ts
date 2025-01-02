import { Component, Input, Output, EventEmitter } from '@angular/core';

const INSTITUTIONS = 'INSTITUTIONS'

@Component({
  selector: 'app-internship-form-modal',
  imports: [],
  templateUrl: './internship-form-modal.component.html',
  styleUrl: './internship-form-modal.component.scss'
})
export class InternshipFormModalComponent {
  @Input() isVisible: boolean = false;
  @Input() modalType: string = '';
  @Input() title: string = this.modalType === INSTITUTIONS ? 'For Institutions' : 'For Students';
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
