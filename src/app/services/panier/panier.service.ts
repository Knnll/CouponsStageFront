import { Injectable } from '@angular/core';
import {Coupon} from '../../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panier: Coupon[] = [];
  private panierKey = 'panier';
  // Puisque c'est une démo avant tout, je veux stocker temporairement les informations du dernier achat
  // On met à NULL au début car un coupon peut exister sans avoir été acheté
  private dernierAchat: Coupon[] = [];

  constructor() { }

  getPanier(): Coupon[] {
    const panier = localStorage.getItem(this.panierKey);
    return panier ? JSON.parse(panier) : [];
  }

  ajouterAuPanier(coupon: any): void {
    // On récupère les coupons dans le panier
    const panier = this.getPanier();

    // Adapter le coupon pour extraire un champ 'id' valide
    const adaptedCoupon: Coupon = {
      // on copie toutes les propriétés du coupon (cf snapface)
      ...coupon,
      /*Convertir @id (API Platform en JSON-LD) en id comme attendu
        Si coupon.id existe (donc pas NULL ou undefined) on l'utilise direct
        Sinon on extrait l'id depuis @id car dans l'API, les @id peuvent contenir
        des liens complets (comme l'url avec 'api/coupons/1') et on veut uniquement
        la partie NUMERIQUE donc le '1'
        split découpe la châine de caractères pour avoir ["api", "coupons", "1"]
        pop permet de récupérer le derenir élément du tableau ! Et on le transforme
        afin qu'il passe d'une string à un number
       */
      id: coupon.id ?? Number(coupon['@id']?.split('/').pop()),
    };

    // Ajouté le coupon normalisé au panier
    panier.push(adaptedCoupon);
    // Sauvegarde du panier dans le localStorage
    localStorage.setItem(this.panierKey, JSON.stringify(panier));
  }

  getTotal(): number {
    const panier = this.getPanier();
    return panier.reduce((total, coupon) => total + coupon.prix, 0);
  }

  supprimerDuPanier(coupon: Coupon): void {
    // Charger les coupons depuis le localStorage
    let panier = this.getPanier();

    // Filtrer les coupons pour ne garder que ceux avec un 'id' différent
    // si l'id du coupon n'est pas égal à celui qu'on veut supprimer, alors il reste dans le panier
    panier = panier.filter(c => {
      // On peut dire que "!==" veut dire: "Je veux garder tous les coupons dont l'ID est
      // différent de celui du coupon que je veux supprimer."
      console.log(`Comparaison: ${c.id} !== ${coupon.id}`);
      return c.id !== coupon.id;
    });

    // Mise à jour du localStorage
    localStorage.setItem(this.panierKey, JSON.stringify(panier));
  }

  validerPanier() {
    // Une fois le panier validé, on le supprime du localStorage
    localStorage.removeItem(this.panierKey);
    console.log('Panier validé et vidé');
  }

  getDernierAchat(): Coupon[] {
    // On retourne ce ui est stocké dans dernierAchat et c'est NULL si aucun achat n'a été fait
    return this.dernierAchat;
  }

  setDernierAchat(coupon: Coupon[]): void {
    // On met à jour la propriété dernierAchat avec les infos du coupon acheté
    this.dernierAchat = coupon;
    // ATTENTION si la page est rafraîchie, le coupon acheté disparaît car on n'utilise pas le localStorage
  }

}
