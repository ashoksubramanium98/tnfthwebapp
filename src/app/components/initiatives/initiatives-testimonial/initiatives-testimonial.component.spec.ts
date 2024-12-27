import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativesTestimonialComponent } from './initiatives-testimonial.component';

describe('InitiativesTestimonialComponent', () => {
  let component: InitiativesTestimonialComponent;
  let fixture: ComponentFixture<InitiativesTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitiativesTestimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitiativesTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
