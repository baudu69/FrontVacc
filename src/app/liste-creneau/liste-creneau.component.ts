import { Component, OnInit } from '@angular/core';
import {Vaccin} from "../metier/Vaccin";
import {Router} from "@angular/router";
import {VaccinService} from "../service/vaccin.service";
import {Creneau} from "../metier/Creneau";
import {CreneauService} from "../service/creneau.service";
import {LotService} from "../service/lot.service";
import {Lot} from "../metier/Lot";

@Component({
  selector: 'app-liste-creneau',
  templateUrl: './liste-creneau.component.html',
  styleUrls: ['./liste-creneau.component.css']
})
export class ListeCreneauComponent implements OnInit {

  lesVaccins: Vaccin[] | undefined
  lesCreneaux: Creneau[] | undefined
  vaccinChoisi: Number | undefined
  formAjoutCreneau = true
  vaccinChoisiAjoutCreneau: Number | undefined
  lotChoisiAjoutCreneau: Number | undefined
  lesLots: Lot[] | undefined
  dateAjoutLot: string | undefined
  isStaff: Boolean | undefined

  constructor(private router: Router, private vaccinService: VaccinService, private creneauService: CreneauService, private lotService: LotService) {
    //this.dateAjoutLot = new Date().toISOString().slice(0, 16);
    this.isStaff = localStorage.getItem("superUser") == 'true'
  }

  ngOnInit(): void {
    this.vaccinService.getLesVaccins().subscribe( (data) => {
        this.lesVaccins = data
      }
    )
  }

  ajouterCreneau() {
    var dateControl = document.querySelector('input[type="datetime-local"]');
    // @ts-ignore
    console.log(dateControl.value)
    let unCreneau = new Creneau()
    unCreneau.LotUtilise = this.lotChoisiAjoutCreneau
    // @ts-ignore
    unCreneau.dateCreneau = new Date(this.dateAjoutLot)
    //2021-06-18T16:35:00Z
    // @ts-ignore
      //this.dateAjoutLot?.getFullYear() + "-" + this.dateAjoutLot?.getMonth()+"-"+this.dateAjoutLot?.getDate()+"T"+this.dateAjoutLot?.getHours()+":"+this.dateAjoutLot?.getMinutes()+":"+this.dateAjoutLot?.getSeconds()+"Z"
    this.creneauService.ajouterCreneau(unCreneau, dateControl.value).subscribe((data) => {
      if (data.message == "OK") {
        this.chargerLesCreneaux()
      } else {
        console.log(data)
      }
    })
  }

  refreshFormLot() {
    this.lotService.getLesLots(this.vaccinChoisiAjoutCreneau).subscribe((data) => {
      this.lesLots = data;
    })
  }

  afficherFormAjoutCreneau() {
    this.formAjoutCreneau = false
  }

  chargerLesCreneaux(): void {
    this.creneauService.getLesCreneaux(this.vaccinChoisi).subscribe((data) => {
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
    })
  }


  reserverCreneau(idCreneau: Number | undefined) {
    this.creneauService.reserverCreneau(idCreneau).subscribe((data) => {
      if (data.message == "OK") {
        this.chargerLesCreneaux()
      } else {
        console.log(data)
      }
    })
  }

}
