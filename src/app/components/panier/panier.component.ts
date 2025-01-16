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
  // Tableau qui stocke les coupons dans le panier (actuellemtn)
  panier: Coupon[] = [];
  // On commence le panier à une valeur de 0 euros
  total: number = 0;

  constructor(private panierService: PanierService,
              private router: Router) {}

  ngOnInit() {
    // On fait appel au service pour réupérer les deux méthodes pour
    // Récupérer la liste des coupons actuels et le total du panier avec les prix des coupons
    this.panier = this.panierService.getPanier();
    this.total = this.panierService.getTotal();
  }

  acheterCoupon() {
    // Simuler un paiment car c'est pour la démo, et je ne sais pas comment faire autrement
    console.log('Paiement en cours...');

    // appeler la méthode du service
    this.panier.forEach(coupon => {
      this.panierService.acheterCoupon(coupon)
    })

    // Rediriger vers la page de paiement accepté
    this.router.navigate(['/coupon-achete']);
  }

  supprimerDuPanier(coupon: Coupon) {
    // On supprime du panier un coupon spécifique que l'utilisateur ne veut plus acheter
    this.panierService.supprimerDuPanier(coupon);
    // On met à jour la liste des coupons dans le panier après la suppression d'un autre coupon
    this.panier = this.panierService.getPanier();
    // On met à jour le prix du panier sans le coupon qui a été supprimé
    this.total = this.panierService.getTotal();
  }
}
