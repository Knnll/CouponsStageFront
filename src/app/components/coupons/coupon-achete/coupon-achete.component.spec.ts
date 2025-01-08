import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponAcheteComponent } from './coupon-achete.component';

describe('CouponAcheteComponent', () => {
  let component: CouponAcheteComponent;
  let fixture: ComponentFixture<CouponAcheteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouponAcheteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouponAcheteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
