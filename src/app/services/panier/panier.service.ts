import { Injectable } from '@angular/core';
import {Coupon} from '../../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panier: Coupon[] = [];

  constructor() { }

  ajouterAuPanier(coupon: Coupon): void {
    this.panier.push(coupon);
  }

  getPanier(): Coupon[] {
    return this.panier;
  }

  getTotal(): number {
    return this.panier.reduce((total, coupon) => total + coupon.prix, 0);
  }

}
