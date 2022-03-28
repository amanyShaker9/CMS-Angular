import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  baseURL="http://localhost:8080/Appointment";
  constructor(public _HttpClient:HttpClient) {
       
   }
  
   getAllAppointment():Observable<any>{
     return this._HttpClient.get(`${this.baseURL}`);
   }

   bookAppointment(data:any):Observable<any>{
    return this._HttpClient.post(`${this.baseURL}`,data);
   }

   getAllDoctors():Observable<any>{
    return this._HttpClient.get("http://localhost:8080/Doctor");
   }

   editAppointment(data:any):Observable<any>{
    return this._HttpClient.put(`${this.baseURL}`,data);
   }

   deleteAppointment(id:Number):Observable<any>{
    return this._HttpClient.delete(`${this.baseURL}/${id}`);
   }

   addDoctorAppointment(data:any):Observable<any>{
         return this._HttpClient.post("http://localhost:8080/doctorAppointment",data);
   }

   getDoctorAppointment():Observable<any>{
    return this._HttpClient.get("http://localhost:8080/doctorAppointment");
}
}
