import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativesFeaturesComponent } from './initiatives-features.component';

describe('InitiativesFeaturesComponent', () => {
  let component: InitiativesFeaturesComponent;
  let fixture: ComponentFixture<InitiativesFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitiativesFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitiativesFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
