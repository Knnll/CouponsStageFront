import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Coupon} from '../../models/coupon';
import {ApiResponse} from '../../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  private apiUrl = 'http://localhost:8000/api/coupons'

  constructor(private http: HttpClient) { }

  getAllCoupons(): Observable<Coupon[]> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      // On utilise le pipe pour chaîner plusieurs opérateurs (comme map qui suit) de transformation
      // Sur un Observable !
      map(response => response.member)
    );
  }

  getCouponById(couponId: number): Observable<Coupon> {
    return this.http.get<Coupon>(`${this.apiUrl}/${couponId}`);
  }

}
