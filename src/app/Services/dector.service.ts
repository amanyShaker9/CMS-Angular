import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Doctor}from './../Model/doctor';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DectorService {

  doctorId:number=1;
  private baseUrl:string="http://localhost:8080/Doctor"
  getDoctors(){
      return this.http.get<Doctor[]>(this.baseUrl);
  }
  getDoctorById(id:number){
    return this.http.get<Doctor>(this.baseUrl+"/"+id);
}
  addDoctor(d:Doctor){
    return this.http.post<Doctor>(this.baseUrl,d)
  }
  updateDoctor(d:Doctor){
    return this.http.put<Doctor>(this.baseUrl,d);
  }
  deleteDoctor(id:number){
    return this.http.delete(this.baseUrl+"/"+id);
  }
  constructor(public http: HttpClient) { 

  }
}
