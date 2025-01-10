import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Acheteur} from '../../models/acheteur';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = 'http://localhost:8000/api';
  acheteur !:Acheteur;

  constructor(private http: HttpClient) { }

  // penser à mettre ça en local storage !

  getIdByEmail(email: string) {
    // Prépare une requête qui devra envoyer un Objet Json avec un email
    this.http.post<any>(`${this.apiUrl}/users/details`, {email : email}).pipe(
      // Quand il récupère les données, il ne gardera que la partie qui nous intéresse: infos
      map((donnees) => donnees.infos),
      //tap(() => setTimeout(()=> console.log(this.acheteur), 1000))
    ).subscribe(
      // Une fois ça terminé, on met à jour notre Achteur avec les données reçues
      (donnees: Acheteur) => {
        this.acheteur = donnees;
      }
    );
  }

}
