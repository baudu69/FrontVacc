import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LotService {

  private httpOptions: any;

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  getLesLots(idVaccin: Number | undefined): Observable<any> {
    return this.httpClient.get<any[]>(environment.apiURL + 'api/vaccin/'+idVaccin+'/lot', this.httpOptions);
  }
}
