import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCreditComponent } from './photo-credit.component';

describe('PhotoCreditComponent', () => {
  let component: PhotoCreditComponent;
  let fixture: ComponentFixture<PhotoCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoCreditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
