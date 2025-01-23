import { Injectable } from '@angular/core';
import { Coupon } from '../../models/coupon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panier: Coupon[] = [];
  private portefeuille: Coupon[] = [];
  private dernierAchat: Coupon[] = [];
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getPanier(): Coupon[] {
    return this.panier;
  }

  ajouterAuPanier(coupon: any): void {
    // Adapter le coupon pour extraire un champ 'id' valide
    const adaptedCoupon: Coupon = {
      ...coupon,
      id: coupon.id ?? Number(coupon['@id']?.split('/').pop()),
    };

    // Ajouté le coupon normalisé au panier
    this.panier.push(adaptedCoupon);
  }

  getTotal(): number {
    return this.panier.reduce((total, coupon) => total + coupon.prix, 0);
  }

  supprimerDuPanier(coupon: Coupon): void {
    // Filtrer les coupons pour ne garder que ceux avec un 'id' différent
    this.panier = this.panier.filter(c => c.id !== coupon.id);
  }

  validerPanier(): void {
    this.panier = [];  // Vider le panier après validation
    console.log('Panier validé et vidé');
  }

  acheterCouponAPI(couponId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/coupons/acheter`, { coupon_id: couponId });
  }

  acheterCoupon(coupon: Coupon): void {
    // Vérification d'abord si le coupon n'est pas déjà dans le portefeuille
    if (this.portefeuille.some(c => c.id === coupon.id)) {
      console.log('Coupon déjà acheté.');
      return;  // Stoppe la fonction si le coupon est déjà dans le portefeuille
    }

    this.acheterCouponAPI(coupon.id).subscribe({
      next: (response) => {
        console.log('Coupon acheté avec succès :', response);
        this.portefeuille.push(coupon);
        this.supprimerDuPanier(coupon);
        this.setDernierAchat([coupon]);
      },
      error: (err) => {
        console.error('Erreur lors de l\'achat du coupon :', err);
      }
    });
  }


  getPortefeuille(): Coupon[] {
    return this.portefeuille;
  }

  getDernierAchat(): Coupon[] {
    return this.dernierAchat;
  }

  setDernierAchat(coupon: Coupon[]): void {
    this.dernierAchat = coupon;
  }
}
