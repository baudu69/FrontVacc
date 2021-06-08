import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vaccin} from "../metier/Vaccin";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VaccinService {
  private httpOptions: any;

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  getLesVaccins(): Observable<any> {
    return this.httpClient.get<any[]>(environment.apiURL + 'api/vaccin', this.httpOptions);
  }
}
