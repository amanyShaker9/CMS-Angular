 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Medicine } from "../Model/medicine";

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  // medicine:Medicine= new Medicine(2, 'Ogmantine', 'AntiBiotic', 'MedRight', 210, '2023-01-18', 105);
    // new Medicine(2, 'Ogmantine', 'AntiBiotic', 'MedRight', 210, '2023-01-18', 105),
  // new Medicine(3, 'Novalgine', 'Analgesics', 'NextCare', 350, '2022-12-28', 66)
  // ]

  private baseUrl = "http://localhost:8070/medicine"
  getAllMedicine() {
    return this.http.get<Medicine[]>(this.baseUrl);
  }

  // getMedicineById(mdn: Medicine,id: number){
  //   return this.http.put<Medicine>("http://localhost:8070/medicine/update/"+id, mdn).pipe(map((res:any)=>{
  //     return res
  //   }))
  // }

  add(mdn: Medicine) {
    return this.http.post<Medicine>(this.baseUrl, mdn)
  }

  updateMedicine(mdn: Medicine, id:number) {
    console.log(mdn);
    return this.http.put<Medicine>("http://localhost:8070/medicine/"+id, mdn)
  }

  deleteMedicine(id: number) {
    return this.http.delete(this.baseUrl+ "/" +id)
  }

  constructor(public http:HttpClient) { 
  //  this.http.get
  }
}
