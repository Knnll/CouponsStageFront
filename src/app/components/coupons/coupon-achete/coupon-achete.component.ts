import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe, NgForOf, NgIf} from '@angular/common';
import {Coupon} from '../../../models/coupon';
import {PanierService} from '../../../services/panier/panier.service';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-coupon-achete',
  imports: [
    NgIf,
    DatePipe,
    NgForOf,
    RouterLink
  ],
  templateUrl: './coupon-achete.component.html',
  styleUrl: './coupon-achete.component.css'
})
export class CouponAcheteComponent implements OnInit {
  // variable pour simuler un faux chargement
  isLoading = true;
  // Tableau pour stocekr les coupons achetés
  dernierAchat: Coupon[] = [];

  constructor(private panierService: PanierService,
              private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      // Simulation d'un délais pour afficher 'Paiement en cours' avant le h1 et le p
      this.isLoading = false;
      // Appel du service pour récupérer les coupons achetés
      this.dernierAchat = this.panierService.getDernierAchat();
    }, 10000); // en millisecondes (donc, 10 secondes)
  }

  voirPortefeuille() {
    console.log('Navigation vers le portefeuille...');
    this.router.navigate(['/mon-portefeuille']);
  }

}
