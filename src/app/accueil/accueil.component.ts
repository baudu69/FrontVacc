import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  connecte: Boolean

  constructor() {
    this.connecte = localStorage.getItem('username') != undefined
  }

  ngOnInit(): void {
  }

}
