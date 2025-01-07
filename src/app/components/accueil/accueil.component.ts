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

    this.authService.getUserInfo().subscribe({
      next: (data) => {
        this.prenom = data.prenom;
      }
    });
  }

  onContinue(): void {
    this.router.navigateByUrl('coupons');
  }

}
