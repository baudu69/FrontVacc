import { Component, OnInit } from '@angular/core';
import {User} from "../metier/User";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  username: string | undefined
  password: string | undefined
  prenom: string | undefined
  nom: string | undefined
  mail : string | undefined

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  inscription() {
    let unUser = new User()
    unUser.email=this.mail
    unUser.password=this.password
    unUser.first_name = this.prenom
    unUser.last_name = this.nom
    this.authService.inscription(unUser).subscribe((data) => {
      if (data.message == 'OK') {
        alert("Compte cree")
      }
    })
  }

}
