import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { $ } from 'protractor';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import 'rxjs/Rx';


@Injectable()
export class AuthenticationService {

  constructor(private httpclient: HttpClient) {

  }

  authenticateUser(data) {
    return this.httpclient.post('http://localhost:3000/auth/v1/', data);

  }

  setBearerToken(token) {
    localStorage.setItem('bearerToken', token);
  }

  getBearerToken() {
    return localStorage.getItem('bearerToken');
  }

  isUserAuthenticated(token): Promise<boolean> {
    return this.httpclient.post('http://localhost:3000/auth/v1/isAuthenticated',token,
    {headers: new HttpHeaders().set(`Authorization`, `Bearer ${token}`)}).map(response => response['isAuthenticated'])
    .toPromise();
  }
}
