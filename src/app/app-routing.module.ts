import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AccueilComponent} from "./accueil/accueil.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {ListeCreneauComponent} from "./liste-creneau/liste-creneau.component";
import {ListeVaccinComponent} from "./liste-vaccin/liste-vaccin.component";
import {DeconnexionComponent} from "./deconnexion/deconnexion.component";
import {MesCreneauxComponent} from "./mes-creneaux/mes-creneaux.component";
import {InscriptionComponent} from "./inscription/inscription.component";

const routes: Routes = [
  { path: '', component: AccueilComponent, pathMatch: 'full' },
  { path: 'connexion', component: ConnexionComponent},
  { path: 'listeCreneau', component: ListeCreneauComponent},
  { path: 'listeVaccin', component: ListeVaccinComponent},
  { path: 'deconnexion', component: DeconnexionComponent},
  { path: 'mesCreneaux', component: MesCreneauxComponent},
  { path: 'inscription', component: InscriptionComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
