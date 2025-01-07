import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEnquiryModalComponent } from './service-enquiry-modal.component';

describe('ServiceEnquiryModalComponent', () => {
  let component: ServiceEnquiryModalComponent;
  let fixture: ComponentFixture<ServiceEnquiryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceEnquiryModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceEnquiryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
