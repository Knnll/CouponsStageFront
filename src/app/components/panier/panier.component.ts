import {Component, OnInit} from '@angular/core';
import {Coupon} from '../../models/coupon';
import {PanierService} from '../../services/panier/panier.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-panier',
  imports: [
    NgForOf
  ],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit {
  panier: Coupon[] = [];
  total: number = 0;

  constructor(private panierService: PanierService) {}

  ngOnInit() {
    this.panier = this.panierService.getPanier();
    this.total = this.panierService.getTotal();
  }

}
