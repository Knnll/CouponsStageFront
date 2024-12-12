export class Coupon {
  // Définition des propriétés du modèle
  id!: number;
  titre!: string;
  adresse!: string;
  ville!: string;
  code_postal!: string;
  prix!: number;
  conditions!: string;
  date_creation!: Date;
  fin_validite!: Date;
  QR_code!: string;
  acheteur?: any;
  commerce?: any;
  association?: any;

  // Constructeur pour initialiser les propriétés
  constructor(
    id: number,
    titre: string,
    adresse: string,
    ville: string,
    code_postal: string,
    prix: number,
    conditions: string,
    date_creation: Date,
    fin_validite: Date,
    QR_code:  string,
    acheteur?: any,
    commerce?: any,
    association?: any
  ) {
    this.id = id;
    this.titre = titre;
    this.adresse = adresse;
    this.ville = ville;
    this.code_postal = code_postal;
    this.prix = prix;
    this.conditions = conditions;
    this.date_creation = date_creation;
    this.fin_validite = fin_validite;
    this.QR_code = QR_code;
    this.acheteur = acheteur;
    this.commerce = commerce;
    this.association = association;
  }

}
