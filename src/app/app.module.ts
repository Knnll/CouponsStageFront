import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptors} from '@angular/common/http';  // Nécessaire pour les requêtes HTTP
import { CouponListComponent } from './components/coupons/coupon-list/coupon-list.component';
import {QRCodeComponent} from 'angularx-qrcode';
import {jwtInterceptor} from './services/intercepteurs/auth.interceptor';
import {AppRoutingModule} from './app.routes';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    CouponListComponent,
    QRCodeComponent,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    // récupère le jeton JWT dans les requêtes HTTP et l'ajoute aux en-ête s'il existe
    provideHttpClient(withInterceptors([jwtInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
