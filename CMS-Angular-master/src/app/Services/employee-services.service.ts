import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Employee}from './../Model/employee';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService {

  employeeId:number=1;
 
  private baseUrl:string="http://localhost:8080/Doctor"
  getEmployees(){
      return this.http.get<Employee[]>(this.baseUrl);
  }
  getEmployeeById(id:number){
    return this.http.get<Employee>(this.baseUrl+"/"+id);
}
  addEmployee(d:Employee){
    console.log(d);
    return this.http.post<Employee>(this.baseUrl+"/post",d)
  }
  updateEmployee(d:Employee,id:number){
    return this.http.put<Employee>(this.baseUrl+"/edit/"+id,d);
  }
  deleteEmployee(id:number){
    console.log("rout "+id);

    return this.http.delete(this.baseUrl+"/delete"+"/"+id);
  }
  constructor(public http: HttpClient) {

  }
}
