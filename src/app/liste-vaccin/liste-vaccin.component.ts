import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {VaccinService} from "../service/vaccin.service";
import {Vaccin} from "../metier/Vaccin";
import {Lot} from "../metier/Lot";
import {LotService} from "../service/lot.service";
import {Form, NgForm} from "@angular/forms";

@Component({
  selector: 'app-liste-vaccin',
  templateUrl: './liste-vaccin.component.html',
  styleUrls: ['./liste-vaccin.component.css']
})
export class ListeVaccinComponent implements OnInit {

  lesVaccins: Vaccin[] | undefined
  lesLots: Lot[] | undefined
  afficherForm: Boolean
  noVaccinForm: Number | undefined
  isStaff: Boolean | undefined

  constructor(private router: Router, private vaccinService: VaccinService, private lotService: LotService) {
    this.afficherForm = false
    this.isStaff = localStorage.getItem("superUser") == 'true'
  }

  ngOnInit(): void {

    this.vaccinService.getLesVaccins().subscribe( (data) => {
      this.lesVaccins = data
      }
    )
  }

  getLesLots(idVaccin: Number | undefined) {
    this.lotService.getLesLots(idVaccin).subscribe((data) => {
        this.lesLots = data
      }
    )
    this.noVaccinForm = idVaccin
  }

  afficherFormAjoutLot() {
    this.afficherForm = true
  }

  ajouterLot(form: NgForm) {
    let idLot = form.value['formNoLot']
    let quantiteLot = form.value['QuantiteLot']
    let leLot = new Lot()
    leLot.noLot = idLot
    leLot.QuantiteLot = quantiteLot
    leLot.QteRestante = quantiteLot
    leLot.Vaccin = this.noVaccinForm
    this.lotService.ajouterLot(leLot).subscribe((data) => {
      console.log(data)
      form.resetForm()
      this.getLesLots(this.noVaccinForm)
      this.afficherForm = false
    })
  }

}
