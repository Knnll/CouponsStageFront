import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-accueil',
  imports: [
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit {
  prenom: string = '';
  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    if (!this.authService.getToken()) {
      return;
    }

    // Méthode qui donne le prénom de la personne connectée au site
    this.authService.getUserInfo().subscribe({
      next: (data) => {
        this.prenom = data.prenom;
      }
    });
  }

  onContinue(): void {
    // Méthode qui amène à la liste des coupons
    this.router.navigateByUrl('coupons');
  }

}
