import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any=null
  saveuserdata(){
    let encodedUserdata =JSON.stringify(localStorage.getItem('usertoken'))
    this.userData=jwtDecode(encodedUserdata) 
    console.log(this.userData);
    
   }

  constructor(private _HTTP:HttpClient) { }
  register(formdata:any):Observable<any>
  {
    return this._HTTP.post(`https://asd-6gr1.onrender.com/login`,formdata);
  }
}
