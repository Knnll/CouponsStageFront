import {Coupon} from './coupon';

export class Commerce {
  // Définition des propriétés du modèle
  id!: number;
  emai!: string;
  password!: string;
  nom!: string;
  adresse!: string;
  code_postal!: string;
  ville!: string;
  siret!: string;
  coupons: Coupon[] =[];

  // Constructeur pour initialiser les propriétés
  constructor(
    id: number,
    email: string,
    password: string,
    nom: string,
    adresse: string,
    code_postal: string,
    ville: string,
    siret: string,
    coupons: Coupon[] = [],
  ) {
    this.id = id;
    this.emai = email;
    this.password = password;
    this.nom = nom;
    this.adresse = adresse;
    this.code_postal = code_postal;
    this.ville = ville;
    this.siret = siret;
    this.coupons = coupons;
  }
}
