import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  public mail = ""
  public mdp = ""
  public message = ""

  constructor(private router: Router, private serviceAuth: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.serviceAuth.signIn(this.mail, this.mdp).subscribe(
      data => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('actualise', 'true');
          this.router.navigate([''])
      },
      Error => {
        this.message = 'Erreur lors de la connexion';
      }
    );
  }

}
