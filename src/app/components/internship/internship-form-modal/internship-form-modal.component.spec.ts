import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipFormModalComponent } from './internship-form-modal.component';

describe('InternshipFormModalComponent', () => {
  let component: InternshipFormModalComponent;
  let fixture: ComponentFixture<InternshipFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternshipFormModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternshipFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
