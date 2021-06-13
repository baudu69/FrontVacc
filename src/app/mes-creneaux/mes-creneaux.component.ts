import { Component, OnInit } from '@angular/core';
import {Creneau} from "../metier/Creneau";
import {Router} from "@angular/router";
import {CreneauService} from "../service/creneau.service";

@Component({
  selector: 'app-mes-creneaux',
  templateUrl: './mes-creneaux.component.html',
  styleUrls: ['./mes-creneaux.component.css']
})
export class MesCreneauxComponent implements OnInit {
  lesCreneaux: Creneau[] | undefined
  isStaff: Boolean | undefined

  constructor(private router: Router, private creneauService: CreneauService) {
    this.isStaff = localStorage.getItem("superUser") == 'true'
  }

  ngOnInit(): void {
    this.chargerMesCreneaux()
  }

  chargerMesCreneaux() {
    this.creneauService.getMesCreneaux().subscribe( (data) => {
        this.lesCreneaux = data
      if (this.lesCreneaux != undefined) {
        for (let i = 0; i < this.lesCreneaux?.length; i++) {
          if (this.lesCreneaux[i].dateCreneau != undefined) {
            // @ts-ignore
            let old: string = this.lesCreneaux[i].dateCreneau.toString()
            let nouvelle: Date = new Date()
            //2021-06-18T16:35:00Z
            let tab: string[] = old.split('T')
            let date: string = tab[0]
            let heure: string = tab[1]
            let tabDate: string[] = date.split('-')
            let tabHeure: string[] = heure.split(':')
            tabHeure[2] = tabHeure[2].slice(0, -1)
            nouvelle.setFullYear(parseInt(tabDate[0]), parseInt(tabDate[1]), parseInt(tabDate[2]))
            nouvelle.setHours(parseInt(tabHeure[0]), parseInt(tabHeure[1]), parseInt(tabHeure[2]))
            this.lesCreneaux[i].dateCreneau = nouvelle
          }
        }
      }
      }
    )
  }

  annulerReservation(idCreneau: Number | undefined) {
    this.creneauService.annulerCreneau(idCreneau).subscribe((data) => {
      if (data.message == "OK") {
        this.chargerMesCreneaux()
      }
    })
  }

}
