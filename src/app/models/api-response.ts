import { Coupon } from './coupon';

export interface ApiResponse {
  '@context': string; // Le contexte de la réponse, souvent utilisé dans les API Hydra ou HAL
  '@id': string; // L'identifiant de la collection
  '@type': string; // Le type de la réponse, souvent "Collection"
  totalItems: number; // Le nombre total d'éléments dans la collection
  member: Coupon[]; // Le tableau des coupons
}

