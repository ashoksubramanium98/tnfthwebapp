import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipModulesComponent } from './internship-modules.component';

describe('InternshipModulesComponent', () => {
  let component: InternshipModulesComponent;
  let fixture: ComponentFixture<InternshipModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternshipModulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternshipModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
