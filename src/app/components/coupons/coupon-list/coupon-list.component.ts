import {Component, Input, OnInit} from '@angular/core';
import {Coupon} from '../../../models/coupon';
import {CouponService} from '../../../services/coupons/coupon.service';
import {AsyncPipe, DatePipe, NgForOf} from '@angular/common';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

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
  errorMessage: string | null = null;

  constructor(private couponService: CouponService,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    // Vérifier si l'utilisateur est connecté avant de charger les coupons
    if (!this.authService.getToken()) {
      this.errorMessage = 'Vous devez être connecté pour voir vos coupons.';
      return;  // Ne pas continuer si le token n'est pas disponible
    }

    // Si le token est disponible, récupérer les coupons
    this.couponService.getAllCoupons().subscribe({
      next: (data) => {
        this.coupons = data;  // Assigner les coupons récupérés
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors de la récupération des coupons: ' + err.message;
      }
    });
  }

  onViewCoupon(couponId: number) {
    this.router.navigateByUrl(`coupons/${couponId}`);
  }

}
