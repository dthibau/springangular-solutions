import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_API_URL } from '../app.constants';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private BASE_URL = SERVER_API_URL + '/authenticate'

  constructor(private httpClient: HttpClient) {}
// Provide username and password for authentication, and once authentication is successful, 
//store JWT token in session
  authenticate(login :string, password: string) {
    return this.httpClient
      .post<any>(this.BASE_URL + '?login='+login + '&password='+password, { login, password })
      .pipe(
        map((userData: any) => {
          console.log(userData);
          let tokenStr = "Bearer " + userData.id_token;
          sessionStorage.setItem("token", tokenStr);
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("token");
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("token");
  }
}
