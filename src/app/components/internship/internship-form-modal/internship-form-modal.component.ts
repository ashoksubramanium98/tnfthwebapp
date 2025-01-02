import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';

const INSTITUTIONS = 'INSTITUTIONS'

@Component({
  selector: 'app-internship-form-modal',
  imports: [],
  templateUrl: './internship-form-modal.component.html',
  styleUrl: './internship-form-modal.component.scss'
})
export class InternshipFormModalComponent implements OnChanges, OnInit, OnDestroy {
  @Input() isVisible: boolean = false;
  @Input() modalType: string = '';
  @Input() title: string = '';
  @Output() confirm = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  ngOnInit(): void {
    this.title = (this.modalType === INSTITUTIONS) ? 'For Institutions' : 'For Students';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['isVisible'].currentValue) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  ngOnDestroy(): void {
    document.body.style.overflow = ''
  }

  closeModal(): void {
    this.isVisible = false;
    this.close.emit();
  }

  onConfirm(): void {
    this.confirm.emit();
  }
}
