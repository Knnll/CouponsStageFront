import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from './components/accueil/accueil.component';
import {CouponListComponent} from './components/coupons/coupon-list/coupon-list.component';
import {CouponDetailsComponent} from './components/coupons/coupon-details/coupon-details.component';
import {PanierComponent} from './components/panier/panier.component';
import {ConnexionComponent} from './components/connexion/connexion.component';
import {CouponAcheteComponent} from './components/coupons/coupon-achete/coupon-achete.component';


export const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'coupons', component: CouponListComponent },
  { path: 'coupons/:id', component: CouponDetailsComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'coupon-achete', component: CouponAcheteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
