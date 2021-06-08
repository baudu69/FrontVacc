import { Component, OnInit } from '@angular/core';
import {Vaccin} from "../metier/Vaccin";
import {Router} from "@angular/router";
import {VaccinService} from "../service/vaccin.service";
import {Creneau} from "../metier/Creneau";
import {CreneauService} from "../service/creneau.service";

@Component({
  selector: 'app-liste-creneau',
  templateUrl: './liste-creneau.component.html',
  styleUrls: ['./liste-creneau.component.css']
})
export class ListeCreneauComponent implements OnInit {

  lesVaccins: Vaccin[] | undefined
  lesCreneaux: Creneau[] | undefined
  vaccinChoisi: Number | undefined

  constructor(private router: Router, private vaccinService: VaccinService, private creneauService: CreneauService) { }

  ngOnInit(): void {
    this.vaccinService.getLesVaccins().subscribe( (data) => {
        this.lesVaccins = data
      }
    )
  }

  chargerLesCreneaux(): void {
    this.creneauService.getLesCreneaux(this.vaccinChoisi).subscribe((data) => {
      this.lesCreneaux = data
    })
  }

}
