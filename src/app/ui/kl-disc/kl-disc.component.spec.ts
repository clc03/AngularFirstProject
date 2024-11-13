import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlDiscComponent } from './kl-disc.component';

describe('KlDiscComponent', () => {
  let component: KlDiscComponent;
  let fixture: ComponentFixture<KlDiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KlDiscComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlDiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
