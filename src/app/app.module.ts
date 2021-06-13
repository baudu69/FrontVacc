import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { ConnexionComponent } from './connexion/connexion.component';
import { ListeCreneauComponent } from './liste-creneau/liste-creneau.component';
import { HttpClientModule } from '@angular/common/http';    // add this
import { FormsModule } from '@angular/forms';    // add this
import { AuthService } from './service/auth.service';
import { ListeVaccinComponent } from './liste-vaccin/liste-vaccin.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { MesCreneauxComponent } from './mes-creneaux/mes-creneaux.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PratiquantVaccComponent } from './pratiquant-vacc/pratiquant-vacc.component';    // add this

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConnexionComponent,
    ListeCreneauComponent,
    ListeVaccinComponent,
    DeconnexionComponent,
    MesCreneauxComponent,
    InscriptionComponent,
    PratiquantVaccComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
      HttpClientModule,
      FormsModule
    ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
