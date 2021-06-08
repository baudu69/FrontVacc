import { Component, OnInit } from '@angular/core';
import {Vaccin} from "../metier/Vaccin";
import {Router} from "@angular/router";
import {VaccinService} from "../service/vaccin.service";

@Component({
  selector: 'app-liste-creneau',
  templateUrl: './liste-creneau.component.html',
  styleUrls: ['./liste-creneau.component.css']
})
export class ListeCreneauComponent implements OnInit {

  lesVaccins: Vaccin[] | undefined

  constructor(private router: Router, private vaccinService: VaccinService) { }

  ngOnInit(): void {
    this.vaccinService.getLesVaccins().subscribe( (data) => {
        this.lesVaccins = data
      }
    )
  }

}
