import { Component, OnInit } from '@angular/core';
import {Creneau} from "../metier/Creneau";
import {Lot} from "../metier/Lot";
import {Vaccin} from "../metier/Vaccin";
import {Patient} from "../metier/Patient";
import {CreneauService} from "../service/creneau.service";
import {PatientService} from "../service/patient.service";
import {VaccinService} from "../service/vaccin.service";
import {LotService} from "../service/lot.service";

@Component({
  selector: 'app-pratiquant-vacc',
  templateUrl: './pratiquant-vacc.component.html',
  styleUrls: ['./pratiquant-vacc.component.css']
})
export class PratiquantVaccComponent implements OnInit {
  lesCreneaux: Creneau[] | undefined
  leCreneau: Creneau | undefined
  lePatient: Patient | undefined
  leLot : Lot | undefined
  leVaccin : Vaccin | undefined

  constructor(private creneauService: CreneauService, private patientService: PatientService, private vaccinService: VaccinService, private lotService: LotService) { }

  ngOnInit(): void {
    this.chargerLesCreneaux()
  }

  chargerLesCreneaux() {
    this.creneauService.getLesCreneauxPratiquant().subscribe((data) => {
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

  chargerInfoCreneau(idCreneau: Number | undefined) {
    if (idCreneau != undefined) {
      this.creneauService.getLeCreneau(idCreneau).subscribe((data) => {
        this.leCreneau = data
        if (this.leCreneau?.dateCreneau != undefined) {
          let old: string = this.leCreneau.dateCreneau.toString()
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
          this.leCreneau.dateCreneau = nouvelle
        }
        this.chargerInfoLot(this.leCreneau?.LotUtilise)
        this.chargerInfoPatient(this.leCreneau?.Patient)
      })
    }
  }

  chargerInfoLot(idLot: Number | undefined) {
    this.lotService.getLeLot(idLot).subscribe((data) => {
      this.leLot = data
      this.chargerInfoVaccin(this.leLot?.Vaccin)
    })
  }

  chargerInfoVaccin(idVaccin: Number | undefined) {
    this.vaccinService.getUnVaccin(idVaccin).subscribe((data) => {
      this.leVaccin = data
    })
  }

  chargerInfoPatient(idPatient: Number | undefined) {
    this.patientService.getLePatient(idPatient).subscribe((data) => {
      this.lePatient = data
    })
  }

}
