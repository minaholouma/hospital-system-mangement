import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData = new BehaviorSubject(null);
  saveuserdata() {
    let encodedUserdata = JSON.stringify(localStorage.getItem('usertoken'));
    this.userData = jwtDecode(encodedUserdata);
    console.log(this.userData);
  }

  constructor(private _HTTP: HttpClient) {}
  register(formdata: any): Observable<any> {

    return this._HTTP.post(`http://localhost:3000/api/user/register`, formdata);
  }

  login(formdata: any): Observable<any> {
    return this._HTTP.post(`http://localhost:3000/api/user/login`, formdata);
  }
}
