import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Bill} from '../Model/bill';
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  
  //using node//////////////////////
private baseUrl:string="http://localhost:8080/Invoice";
getBills(){
  debugger;
 return this.http.get<Bill[]>(this.baseUrl);
}
addBill(bill:Bill){
 return  this.http.post<Bill>(this.baseUrl,bill)
}
deleteBill(id:number){
  debugger;
 return this.http.delete(this.baseUrl+"/"+id);
}
editBill(bill:Bill){
 return this.http.put(this.baseUrl+"/"+bill.bill_id,bill);
}

constructor(public http:HttpClient){}
}
