import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../Model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  baseUrl:string="http://localhost:8080/patient"

 
  constructor(public http:HttpClient) { }
  getAllPatients(){
    return this.http.get<Patient[]>(this.baseUrl);
  }
  getOnePatient(id:number){
    return this.http.get<Patient>(this.baseUrl+"/"+id);
  
  }
  addPatient(patient:any){
    return this.http.post(this.baseUrl,patient);
  }
  updatePatient(id:number,patientObj:Patient){
    console.log(patientObj);
    return this.http.put<Patient>(this.baseUrl+"/"+id,patientObj);
    

  }
  deletePatient(id:number){
    return this.http.delete(this.baseUrl+"/"+id);
  }

  ////needed in invoice////
  getpatientId(obj:any){
    return this.http.get<Patient>(this.baseUrl);
  }
}
