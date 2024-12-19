import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Coupon} from '../../models/coupon';
import {CouponService} from '../../services/coupons/coupon.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {AsyncPipe, DatePipe, NgForOf, NgIf, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-coupon-details',
  imports: [
    DatePipe,
    NgForOf,
    AsyncPipe,
    NgIf,
    UpperCasePipe,
    RouterLink
  ],
  templateUrl: './coupon-details.component.html',
  styleUrl: './coupon-details.component.css'
})
export class CouponDetailsComponent implements OnInit {
  coupon$!: Observable<Coupon>

  constructor(private couponService: CouponService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    const couponId = +this.route.snapshot.paramMap.get('id')!;
    this.coupon$ = this.couponService.getCouponById(couponId);
  }

}
