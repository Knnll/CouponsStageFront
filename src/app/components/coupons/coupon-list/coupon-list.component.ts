import {Component, Input, OnInit} from '@angular/core';
import {Coupon} from '../../../models/coupon';
import {CouponService} from '../../../services/coupons/coupon.service';
import {AsyncPipe, DatePipe, NgForOf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-coupon-list',
  imports: [
    NgForOf,
    DatePipe
  ],
  templateUrl: './coupon-list.component.html',
  styleUrl: './coupon-list.component.css'
})
export class CouponListComponent implements OnInit {
  @Input() coupon!: Coupon;
  coupons: Coupon[] = [];

  constructor(private couponService: CouponService,
              private router: Router) {
  }

  ngOnInit() {
    this.couponService.getAllCoupons().subscribe(data => {
      console.log(data);
      this.coupons = data;
    })
  }

  onViewCoupon(couponId: number) {
    this.router.navigateByUrl(`coupons/${couponId}`);
  }

}
