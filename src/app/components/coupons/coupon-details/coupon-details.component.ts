import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupon } from '../../../models/coupon';
import { CouponService } from '../../../services/coupons/coupon.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe, NgIf, UpperCasePipe } from '@angular/common';
import { PanierService } from '../../../services/panier/panier.service';
import { AuthService } from '../../../services/auth.service';  // Ajout de l'import de AuthService

@Component({
  selector: 'app-coupon-details',
  imports: [
    DatePipe,
    AsyncPipe,
    NgIf,
    UpperCasePipe,
    RouterLink
  ],
  templateUrl: './coupon-details.component.html',
  styleUrls: ['./coupon-details.component.css']
})
export class CouponDetailsComponent implements OnInit {
  coupon$!: Observable<Coupon>;
  errorMessage: string | null = null;  // Ajouter une variable pour gérer les erreurs

  constructor(
    private couponService: CouponService,
    private route: ActivatedRoute,
    private panierService: PanierService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Vérifier si l'utilisateur est connecté avant de charger les détails du coupon
    if (!this.authService.getToken()) {
      this.errorMessage = 'Vous devez être connecté pour voir les détails du coupon.';
      return;
    }

    // Si le token est disponible, récupérer les détails du coupon
    const couponId = +this.route.snapshot.paramMap.get('id')!;
    this.coupon$ = this.couponService.getCouponById(couponId);
  }

  ajouterAuPanier(coupon: Coupon): void {
    this.panierService.ajouterAuPanier(coupon);
    alert('Coupon ajouté au panier !');
  }
}
