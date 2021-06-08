import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AccueilComponent} from "./accueil/accueil.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {ListeCreneauComponent} from "./liste-creneau/liste-creneau.component";
import {ListeVaccinComponent} from "./liste-vaccin/liste-vaccin.component";
import {DeconnexionComponent} from "./deconnexion/deconnexion.component";

const routes: Routes = [
  { path: '', component: AccueilComponent, pathMatch: 'full' },
  { path: 'connexion', component: ConnexionComponent},
  { path: 'listeCreneau', component: ListeCreneauComponent},
  { path: 'listeVaccin', component: ListeVaccinComponent},
  { path: 'deconnexion', component: DeconnexionComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
