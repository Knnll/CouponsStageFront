import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe, NgForOf, NgIf} from '@angular/common';
import {Coupon} from '../../../models/coupon';
import {PanierService} from '../../../services/panier/panier.service';

@Component({
  selector: 'app-coupon-achete',
  imports: [
    NgIf,
    CurrencyPipe,
    DatePipe,
    NgForOf
  ],
  templateUrl: './coupon-achete.component.html',
  styleUrl: './coupon-achete.component.css'
})
export class CouponAcheteComponent implements OnInit {
  isLoading = true;
  dernierAchat: Coupon[] = [];

  constructor(private panierService: PanierService) {}

  ngOnInit() {
    setTimeout(() => {
      // Simulation d'un délais pour afficher 'Paiement en cours' avant le h1 et le p
      this.isLoading = false;
      this.dernierAchat = this.panierService.getDernierAchat();
    }, 3000); // en millisecondes
  }

}
