import { Component, OnInit } from '@angular/core';
import { Prescription } from 'src/app/Model/prescription';
import {PrescriptionService } from '../../../Services/prescription.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.scss']
})
export class PrescriptionListComponent implements OnInit {
   prescriptionArr:Prescription[]=[];
  constructor(public prescServ:PrescriptionService,public router:Router) { }

  ngOnInit(): void {
    this.allPrescription();
  }

allPrescription(){
  this.prescServ.getAllPrescription().subscribe({
    next:a=>{this.prescriptionArr=a}
  
   });
}


deleteById(id:any){
  Swal.fire({
    title: 'Prescription removed Successfully',
    text: 'go to list to see changes!',
    icon: 'success',
   
    confirmButtonText: 'OK!',
  })
   this.prescServ.deletePrescription(id).subscribe(a=>{    
   
     this.allPrescription();
   
 })
}


}
