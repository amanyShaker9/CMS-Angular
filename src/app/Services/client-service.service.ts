import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Client_service}from './../Model/client-srvice';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  Client_serviceId:number=1;

  private baseUrl:string="http://localhost:8080/ClientService"
  getClient_services(){
      return this.http.get<Client_service[]>(this.baseUrl);
  }
  getDoctorById(id:number){
    return this.http.get<Client_service>(this.baseUrl+"/"+id);
}
  addClient_service(d:Client_service){
    console.log(d);
    return this.http.post<Client_service>(this.baseUrl+"/post",d)
  }
  updateClient_service(d:Client_service,id:number){
    return this.http.put<Client_service>(this.baseUrl+"/edit/"+id,d);
  }
  deleteClient_service(id:number){
    console.log("rout "+id);

    return this.http.delete(this.baseUrl+"/delete"+"/"+id);
  }
  constructor(public http: HttpClient) {

  }
}
