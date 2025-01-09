import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  // Connexion et stockage du token dans localStorage
  login(identifiants: { username: string; password: string }): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login_check`, identifiants).pipe(
      tap(response => {
        const token = response.token;
        // Utilise une méthode pour stocker le token
        this.setToken(token);
      })
    );
  }

  getUserInfo(): Observable<{ prenom: string }> {
    const headers = this.getHeaders();
    return this.http.get<{ prenom: string }>(`${this.apiUrl}/acheteurs`);
  }

  // Récupère le token depuis le localStorage (ou retourne une chaîne vide si non présent)
  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  // Envoie le token dans les headers
  getHeaders(): HttpHeaders {
    const token = this.getToken();
    if (!token) {
      throw new Error('Le Token n\' est pas valide');
    }
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  // Stocke le token dans le localStorage
  private setToken(token: string): void {
    // Stocke le token dans localStorage
    localStorage.setItem('token', token);
  }

  // Supprime le token (pour la déconnexion)
  logout(): void {
    localStorage.removeItem('token');
  }
}
