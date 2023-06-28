import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  constructor(private _httpclient:HttpClient) { }

  returnData():Observable<any>{
    return this._httpclient.get(`https://asd-6gr1.onrender.com/doctors`)
  }
}
