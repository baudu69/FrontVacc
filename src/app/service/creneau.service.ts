import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Creneau} from "../metier/Creneau";

@Injectable({
  providedIn: 'root'
})
export class CreneauService {

  private httpOptions: any;

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
  }

  ajouterCreneau(unCreneau: Creneau, date:string): Observable<any> {
    let leCreneau = {
      LotUtilise: unCreneau.LotUtilise,
      dateCreneau: date + "Z"
    }
    return this.httpClient.put<any[]>(environment.apiURL + 'api/creneau/detail', JSON.stringify(leCreneau), this.httpOptions);
  }

  getLesCreneaux(idVaccin: Number | undefined): Observable<any> {
    return this.httpClient.get<any[]>(environment.apiURL + 'api/creneau/'+idVaccin, this.httpOptions);
  }

  reserverCreneau(idCreneau: Number | undefined): Observable<any> {
    return this.httpClient.get(environment.apiURL + 'api/creneau/reserver/'+idCreneau , this.httpOptions)
  }

  annulerCreneau(idCreneau: Number | undefined): Observable<any> {
    return this.httpClient.get(environment.apiURL + 'api/creneau/annuler/'+idCreneau , this.httpOptions)
  }

  getMesCreneaux(): Observable<any> {
    return this.httpClient.get(environment.apiURL + 'api/creneau/mesCreneaux' , this.httpOptions)
  }
}
