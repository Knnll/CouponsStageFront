import {Component, OnInit} from '@angular/core';
import {Coupon} from '../../models/coupon';
import {PanierService} from '../../services/panier/panier.service';
import {NgForOf, NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-panier',
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit {
  panier: Coupon[] = [];
  total: number = 0;

  constructor(private panierService: PanierService,
              private router: Router) {}

  ngOnInit() {
    this.panier = this.panierService.getPanier();
    this.total = this.panierService.getTotal();
  }

  payer() {
    // Simuler un paiment car c'est pour la démo, et je ne sais pas comment faire autrement
    console.log('Paiement en cours...');

    // Simuler le dernier achat
    if (this.panier.length > 0) {
      const dernierAchat = this.panier;
      this.panierService.setDernierAchat(dernierAchat);
    }

    // Une fois le panier validé, on supprime les coupons
    this.panierService.validerPanier();

    // Redirigé vers la page de paiement accepté
    this.router.navigate(['/coupon-achete']);
  }

  supprimerDuPanier(coupon: Coupon) {
    this.panierService.supprimerDuPanier(coupon);
    this.panier = this.panierService.getPanier();
    this.total = this.panierService.getTotal();
  }
}
