import {Coupon} from './coupon';

export class Acheteur {
  // Définition des propriétés du modèle
  id!: number;
  email!: string;
  password!: string;
  nom!: string;
  prenom!: string;
  date_naissance!: Date;
  adresse!: string;
  code_postal!: string;
  ville!: string;
  coupons: Coupon[] = [];

  // Constructeur pour initialiser les propriétés
  constructor(
    id: number,
    email: string,
    password: string,
    nom: string,
    prenom: string,
    date_naissance: Date,
    adresse: string,
    code_postal: string,
    ville: string,
    coupons: Coupon[] = [],
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.nom = nom;
    this.prenom = prenom;
    this.date_naissance = date_naissance;
    this.adresse = adresse;
    this.code_postal = code_postal;
    this.ville = ville;
    this.coupons = coupons;
  }
}
