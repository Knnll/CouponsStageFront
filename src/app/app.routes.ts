import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from './components/accueil/accueil.component';
import {CouponListComponent} from './components/coupons/coupon-list/coupon-list.component';
import {CouponDetailsComponent} from './components/coupons/coupon-details/coupon-details.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'coupons', component: CouponListComponent },
  { path: 'coupons/:id', component: CouponDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
