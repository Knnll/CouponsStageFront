import {Component, OnInit} from '@angular/core';
import {Coupon} from '../../models/coupon';
import {CouponService} from '../../services/coupon.service';
import {AsyncPipe, DatePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-coupon-list',
  imports: [
    NgForOf,
    DatePipe,
    AsyncPipe
  ],
  templateUrl: './coupon-list.component.html',
  styleUrl: './coupon-list.component.css'
})
export class CouponListComponent implements OnInit {
  coupons: Coupon[] = [];

  constructor(private couponService: CouponService) {
  }

  ngOnInit() {
    this.couponService.getAllCoupons().subscribe(data => {
      console.log(data);
      this.coupons = data;
    })
  }

}
