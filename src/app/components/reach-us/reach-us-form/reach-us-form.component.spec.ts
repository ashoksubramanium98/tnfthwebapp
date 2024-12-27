import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachUsFormComponent } from './reach-us-form.component';

describe('ReachUsFormComponent', () => {
  let component: ReachUsFormComponent;
  let fixture: ComponentFixture<ReachUsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReachUsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReachUsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
