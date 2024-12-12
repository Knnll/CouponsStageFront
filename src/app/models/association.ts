import {Coupon} from './coupon';

export class Association {
  // Définition des propriétés du modèle
  id!: number;
  email!: string;
  password!: string;
  nom!: string;
  adresse!: string;
  code_postal!: string;
  ville!: string;
  siret!: string;
  date_creation!: Date;
  coupons: Coupon[] = [];

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
    date_creation: Date,
    coupons: Coupon[] = [],
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.nom = nom;
    this.adresse = adresse;
    this.code_postal = code_postal;
    this.ville = ville;
    this.siret = siret;
    this.date_creation = date_creation;
    this.coupons = coupons;
  }
}
