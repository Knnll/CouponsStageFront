import {Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-coupon-achete',
  imports: [
    NgIf
  ],
  templateUrl: './coupon-achete.component.html',
  styleUrl: './coupon-achete.component.css'
})
export class CouponAcheteComponent implements OnInit {
  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      // Simulation d'un délais pour afficher 'Paiement en cours' avant le h1 et le p
      this.isLoading = false;
    }, 3000); // en millisecondes
  }

}
