import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Prescription} from '../Model/prescription'
@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  baseUrl:string="http://localhost:8080/Prescription";

  constructor(public http:HttpClient) { }

  getAllPrescription(){
    return this.http.get<Prescription[]>(this.baseUrl);
  }
  getOnePrescription(id:number){
    return this.http.get<Prescription>(this.baseUrl+"/"+id);
  
  }
  addPrescription(prescription:object){
    return this.http.post(this.baseUrl,prescription);
  }
  updatePrescription(prescription:any){

    return this.http.put<Prescription>(this.baseUrl+"/"+prescription.pre_id,prescription);
    

  }
  deletePrescription(id:number){
    return this.http.delete(this.baseUrl+"/"+id);
  }

}
