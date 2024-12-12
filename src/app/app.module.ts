import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';  // Nécessaire pour les requêtes HTTP
import { CouponsComponent } from './coupons/coupons.component';  // Ton composant

@NgModule({
  declarations: [
    AppComponent,
    CouponsComponent  // Ajoute ton composant ici
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // Importer HttpClientModule pour les appels API
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
