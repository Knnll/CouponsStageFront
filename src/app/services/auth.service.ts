import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string = '';
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  login(identifiants: { username: string; password: string }): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login_check`, identifiants).pipe(
      tap(response => {
        this.token = response.token;
        localStorage.setItem('token', this.token);  // Assure-toi que le token est stocké
      })
    );
  }

  getToken(): string {
    // Récupère le token depuis le localStorage (ou un autre mécanisme de stockage que tu utilises)
    return this.token || localStorage.getItem('token') || '';
  }


  getHeaders(): HttpHeaders {
    // Vérifie si le token existe avant de l'envoyer
    if (!this.token) {
      // Retourne un en-tête vide ou génère une erreur
      throw new Error('Token is not available');
    }
    return new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  }


}
