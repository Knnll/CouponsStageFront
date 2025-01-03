import { Component } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  // Propriétés
  loginData = { username: '', password: '' }; // Contient les données du formulaire
  errorMessage: string | null = null; // Pour afficher les messages d'erreur

  constructor(private authService: AuthService, private router: Router) {}

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    this.errorMessage = null; // Réinitialiser le message d'erreur
    this.authService.login(this.loginData).subscribe({
      next: () => {
        // Rediriger vers la page principale après connexion réussie
        this.router.navigateByUrl('/accueil');
      },
      error: (err) => {
        // Gérer les erreurs (ex. : mauvais identifiants)
        this.errorMessage = 'Connexion échouée : vérifiez vos identifiants.';
      }
    });
  }
}
