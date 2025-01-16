import {Component, OnInit} from '@angular/core';
import {Coupon} from '../../models/coupon';
import {PanierService} from '../../services/panier/panier.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-mon-portefeuille',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './mon-portefeuille.component.html',
  styleUrl: './mon-portefeuille.component.css'
})
export class MonPortefeuilleComponent implements OnInit {
  portefeuille: Coupon[] = [];
  dernierAchat: Coupon[] = [];

  constructor(private panierService: PanierService) {}

  ngOnInit() {
    this.portefeuille = this.panierService.getPortefeuille();
    this.dernierAchat = this.panierService.getDernierAchat();
  }

  getDernierAchat(): Coupon[] {
    const dernierAchat = localStorage.getItem('dernierAchat');
    return dernierAchat ? JSON.parse(dernierAchat) : [];
  }

}
