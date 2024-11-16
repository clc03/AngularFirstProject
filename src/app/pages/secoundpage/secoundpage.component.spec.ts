import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecoundpageComponent } from './secoundpage.component';

describe('SecoundpageComponent', () => {
  let component: SecoundpageComponent;
  let fixture: ComponentFixture<SecoundpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecoundpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecoundpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
