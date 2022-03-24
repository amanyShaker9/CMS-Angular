import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Doctor} from '../Model/doctor';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseUrl:string="http://localhost:8080/Doctor";
  getDoctors(){
    return this.http.get<Doctor[]>(this.baseUrl);
  }
  constructor(public http:HttpClient) { }
}
