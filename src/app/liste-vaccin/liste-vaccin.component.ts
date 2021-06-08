import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {VaccinService} from "../service/vaccin.service";
import {Vaccin} from "../metier/Vaccin";
import {Lot} from "../metier/Lot";
import {LotService} from "../service/lot.service";

@Component({
  selector: 'app-liste-vaccin',
  templateUrl: './liste-vaccin.component.html',
  styleUrls: ['./liste-vaccin.component.css']
})
export class ListeVaccinComponent implements OnInit {

  lesVaccins: Vaccin[] | undefined
  lesLots: Lot[] | undefined
  afficherForm: Boolean

  constructor(private router: Router, private vaccinService: VaccinService, private lotService: LotService) {
    this.afficherForm = false
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
  }

  afficherFormAjoutLot() {
    this.afficherForm = true
  }

}
