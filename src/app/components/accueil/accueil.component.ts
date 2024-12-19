import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-accueil',
  imports: [
    NgOptimizedImage
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
