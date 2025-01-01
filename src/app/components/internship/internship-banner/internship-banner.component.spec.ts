import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipBannerComponent } from './internship-banner.component';

describe('InternshipBannerComponent', () => {
  let component: InternshipBannerComponent;
  let fixture: ComponentFixture<InternshipBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternshipBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternshipBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
