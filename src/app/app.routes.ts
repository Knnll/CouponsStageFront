import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from './components/accueil/accueil.component';
import {CouponListComponent} from './components/coupon-list/coupon-list.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'coupons', component: CouponListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
