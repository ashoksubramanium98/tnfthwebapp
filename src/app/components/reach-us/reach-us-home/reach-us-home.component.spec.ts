import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachUsHomeComponent } from './reach-us-home.component';

describe('ReachUsHomeComponent', () => {
  let component: ReachUsHomeComponent;
  let fixture: ComponentFixture<ReachUsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReachUsHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReachUsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
