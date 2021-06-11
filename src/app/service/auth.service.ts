import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParamsOptions} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {User} from "../metier/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // http options used for making API calls
  private httpOptions: any;

  // the actual JWT token
  public token: string | null | undefined;

  // the token expiration date
  public token_expires: Date | null | undefined;

  // the username of the logged in user
  public username: String | null | undefined;

  // error messages received from the login attempt
  public errors: any = [];

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  signIn(login: string, pwd: string): Observable<any> {
    let unVisiteur = {
      username: login,
      password: pwd
    }
    return this.httpClient.post<any>(environment.apiURL + 'api-token-auth/', JSON.stringify(unVisiteur), this.httpOptions);
  }

  inscription(unUser: User): Observable<any> {
    return this.httpClient.post<any>(environment.apiURL + 'api/inscription', JSON.stringify(unUser), this.httpOptions);
  }

  public refreshToken() {
    this.httpClient.post('/api-token-refresh/', JSON.stringify({token: this.token}), this.httpOptions).subscribe(
      data => {
        // @ts-ignore
        this.updateData(data['token']);
      },
      err => {
        this.errors = err['error'];
      }
    );
  }

  private updateData(token: string) {
    localStorage.setItem('token', token)
    this.token = token;
    this.errors = [];

    // decode the token to read the username and expiration timestamp
    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.username = token_decoded.username;
    if (typeof this.username === "string") {
      localStorage.setItem('username', this.username)
    }
  }
}
