import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CreneauService {

  private httpOptions: any;

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  getLesCreneaux(idVaccin: Number | undefined): Observable<any> {
    return this.httpClient.get<any[]>(environment.apiURL + 'api/creneau/'+idVaccin, this.httpOptions);
  }
}
