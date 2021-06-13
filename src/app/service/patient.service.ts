import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private httpOptions: any;

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
  }

  getLePatient(idPatient: Number | undefined): Observable<any> {
    return this.httpClient.get(environment.apiURL + 'api/patient/'+idPatient, this.httpOptions)
  }
}
