import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Coupon} from '../../models/coupon';
import {ApiResponse} from '../../models/api-response';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  // Récupère le JSON des coupons de mon backend
  private apiUrl = 'http://localhost:8000/api/coupons'

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  getAllCoupons(): Observable<Coupon[]> {
    try {
      const headers = this.authService.getHeaders();
      return this.http.get<ApiResponse>(this.apiUrl, { headers }).pipe(
        map(response => response.member)
      );
    } catch (error) {
      console.error('Error: ', error);
      throw new Error('Token not available for authentication');
    }
  }

  getCouponById(couponId: number): Observable<Coupon> {
    try {
      const headers = this.authService.getHeaders();  // Récupère les en-têtes avec le token
      return this.http.get<Coupon>(`${this.apiUrl}/${couponId}`, { headers });
    } catch (error) {
      console.error('Error: ', error);
      throw new Error('Token not available for authentication');
    }
  }

}
