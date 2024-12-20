import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accueil',
  imports: [
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onContinue(): void {
    this.router.navigateByUrl('coupons');
  }

}
