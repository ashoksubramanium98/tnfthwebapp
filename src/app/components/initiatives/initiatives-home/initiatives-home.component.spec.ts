import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativesHomeComponent } from './initiatives-home.component';

describe('InitiativesHomeComponent', () => {
  let component: InitiativesHomeComponent;
  let fixture: ComponentFixture<InitiativesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitiativesHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitiativesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
