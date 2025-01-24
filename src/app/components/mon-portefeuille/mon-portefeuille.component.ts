import {Component, OnInit} from '@angular/core';
import {Coupon} from '../../models/coupon';
import {PanierService} from '../../services/panier/panier.service';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {QRCodeComponent} from 'angularx-qrcode';

@Component({
  selector: 'app-mon-portefeuille',
  imports: [
    NgIf,
    NgForOf,
    QRCodeComponent,
    DatePipe
  ],
  templateUrl: './mon-portefeuille.component.html',
  styleUrl: './mon-portefeuille.component.css'
})
export class MonPortefeuilleComponent implements OnInit {
  portefeuille: Coupon[] = [];
  //dernierAchat: Coupon[] = [];

  constructor(private panierService: PanierService) {}

  ngOnInit() {
    this.portefeuille = this.panierService.getPortefeuille();
    //this.dernierAchat = this.panierService.getDernierAchat();
  }

  // Méthode pour créer un QR code avec angular2-qrcode
  generateQRCodeValue(coupon: any): string {
    return `Coupon ID: ${coupon.id}, Titre: ${coupon.titre}, Prix: ${coupon.prix} €`;
  }
}
