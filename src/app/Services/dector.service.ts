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
    console.log(d);
    return this.http.post<Doctor>(this.baseUrl+"/post",d)
  }
  updateDoctor(d:Doctor,id:number){
    return this.http.put<Doctor>(this.baseUrl+"/edit/"+id,d);
  }
  deleteDoctor(id:number){
    console.log("rout "+id);

    return this.http.delete(this.baseUrl+"/delete"+"/"+id);
  }
  constructor(public http: HttpClient) {

  }
}
