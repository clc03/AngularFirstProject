import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCaroselComponent } from './product-carosel.component';

describe('ProductCaroselComponent', () => {
  let component: ProductCaroselComponent;
  let fixture: ComponentFixture<ProductCaroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCaroselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
