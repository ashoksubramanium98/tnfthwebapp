import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesModulesComponent } from './services-modules.component';

describe('ServicesModulesComponent', () => {
  let component: ServicesModulesComponent;
  let fixture: ComponentFixture<ServicesModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesModulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
