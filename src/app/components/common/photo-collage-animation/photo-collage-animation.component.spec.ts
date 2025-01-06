import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCollageAnimationComponent } from './photo-collage-animation.component';

describe('PhotoCollageAnimationComponent', () => {
  let component: PhotoCollageAnimationComponent;
  let fixture: ComponentFixture<PhotoCollageAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoCollageAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoCollageAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
