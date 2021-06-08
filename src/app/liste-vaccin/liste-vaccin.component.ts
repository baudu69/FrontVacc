import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {VaccinService} from "../service/vaccin.service";
import {Vaccin} from "../metier/Vaccin";

@Component({
  selector: 'app-liste-vaccin',
  templateUrl: './liste-vaccin.component.html',
  styleUrls: ['./liste-vaccin.component.css']
})
export class ListeVaccinComponent implements OnInit {

  lesVaccins: Vaccin[] | undefined

  constructor(private router: Router, private vaccinService: VaccinService) { }

  ngOnInit(): void {
    this.vaccinService.getLesVaccins().subscribe( (data) => {
      this.lesVaccins = data
      }
    )
  }

}
