import {Coupon} from '../../models/coupon';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  // Liste des coupons ajoutés au panier
  private panier: Coupon[] = [];

  // Liste des coupons achetés (le portefeuille)
  private portefeuille: Coupon[] = [];

  // Clé utilisée pour stocker le portefeuille dans le localStorage
  private portefeuilleKey = 'portefeuille';

  // Derniers coupons achetés
  //private dernierAchat: Coupon[] = [];

  // URL de l'API backend
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  // Retourne les coupons actuellement dans le panier
  getPanier(): Coupon[] {
    return this.panier;
  }

  // Ajoute un coupon au panier après adaptation de son ID
  ajouterAuPanier(coupon: any): void {
    const adaptedCoupon: Coupon = {
      ...coupon,
      id: coupon.id ?? Number(coupon['@id']?.split('/').pop()), // Adapte l'ID s'il est manquant
    };
    this.panier.push(adaptedCoupon); // Ajoute le coupon au panier
  }

  // Calcule le total du panier
  getTotal(): number {
    return this.panier.reduce((total, coupon) => total + coupon.prix, 0);
  }

  // Supprime un coupon spécifique du panier
  supprimerDuPanier(coupon: Coupon): void {
    this.panier = this.panier.filter(c => c.id !== coupon.id);
  }

  // Envoie une requête à l'API pour acheter un coupon
  acheterCouponAPI(couponId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/coupons/acheter`, { coupon_id: couponId });
  }

  // Achète un coupon, le marque comme acheté, et le stocke localement
  acheterCoupon(coupon: Coupon): void {
    this.acheterCouponAPI(coupon.id).subscribe({
      next: (response) => {
        console.log('Coupon acheté avec succès :', response);

        coupon.isAchete = true; // Marquer comme acheté

        // Ajoute uniquement si le coupon n'est pas déjà présent
        const portefeuille = this.getPortefeuille();
        if (!portefeuille.some(c => c.id === coupon.id)) {
          this.portefeuille.push(coupon); // Ajout au portefeuille local
          localStorage.setItem(this.portefeuilleKey, JSON.stringify(this.portefeuille)); // Met à jour le stockage
        }

        //this.setDernierAchat([coupon]); // Met à jour le dernier achat
      },
      error: (err) => {
        console.error("Erreur lors de l'achat :", err);
      }
    });
  }


  // Récupère les coupons du portefeuille depuis le localStorage
  getPortefeuille(): Coupon[] {
    if (!this.portefeuille || this.portefeuille.length === 0) {
      const storedPortefeuille = localStorage.getItem(this.portefeuilleKey);
      this.portefeuille = storedPortefeuille ? JSON.parse(storedPortefeuille) : [];
    }
    return this.portefeuille;
  }


  // Récupère le dernier achat (s'il est stocké)
  /*getDernierAchat(): Coupon[] {
    return this.dernierAchat;
  }

  // Définit les derniers achats
  setDernierAchat(coupons: Coupon[]): void {
    this.dernierAchat = coupons;
  }
   */
}
