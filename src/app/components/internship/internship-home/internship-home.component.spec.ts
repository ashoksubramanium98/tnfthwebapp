import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipHomeComponent } from './internship-home.component';

describe('InternshipHomeComponent', () => {
  let component: InternshipHomeComponent;
  let fixture: ComponentFixture<InternshipHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternshipHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternshipHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
