import { Injectable } from '@angular/core';
import{HttpClient}  from '@angular/common/http'
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 baseURL="http://localhost:8080";
  constructor(public http:HttpClient) { }


  signUp(data:any):Observable<any>{
   return  this.http.post(`${this.baseURL}/signUp`,data);
  }

  signIn(data:any):Observable<any>{
    return  this.http.post(`${this.baseURL}/signIn`,data);
   }

}
