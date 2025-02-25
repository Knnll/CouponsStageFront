import { Component } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {tap} from 'rxjs';
import {UtilisateurService} from '../../services/utilisateurs/utilisateur.service';

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
  // On veut ces données du formulaire
  loginData = { username: '', password: '' };
  // Pour afficher les messages d'erreur (au début il n'y en a pas)
  errorMessage: string | null = null;

  constructor(private authService: AuthService,
              private router: Router,
              private utilisateurService: UtilisateurService) {}

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    this.errorMessage = null;
    // Appel à l'intercepteur authService
    this.authService.login(this.loginData).pipe(
      // Username = email (même si ça a pas de sens, c'est comme ça)
    tap(() => this.utilisateurService.getIdByEmail(this.loginData.username))
    ).subscribe({
      next: () => {
        // Rediriger vers la page principale après connexion réussie
        this.router.navigateByUrl('/accueil');
      },
      error: (err) => {
        // Gérer les erreurs (ex: mauvais identifiants etc)
        this.errorMessage = 'Connexion échouée : vérifiez vos identifiants.';
      }
    });
  }
}
