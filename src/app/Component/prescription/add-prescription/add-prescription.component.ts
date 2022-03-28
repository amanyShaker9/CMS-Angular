import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {Doctor} from '../../../Model/doctor';
import { Prescription } from 'src/app/Model/prescription';
import { PrescriptionService } from 'src/app/Services/prescription.service';
import { DectorService } from 'src/app/Services/dector.service';
@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.scss']
})
export class AddPrescriptionComponent implements OnInit {
    prescription:Prescription=new Prescription();
    doctorArray:Doctor[]=[];
    doctorId:number=0;
  constructor(public router:Router,public PrescriptionServ:PrescriptionService,public doctorServ:DectorService) { }
  confirmBox(){
    Swal.fire({
      title: 'Prescription Added Successfully',
      text: 'go to list to see changes!',
      icon: 'success',
      confirmButtonText: 'OK!',
    })
  }
  ngOnInit(): void {
    this.allDoctor();
  }
  allDoctor(){
    this.doctorServ.getDoctors().subscribe({
    
        next:a=>{this.doctorArray=a}   
    })
  }

  Add(){
    this. PrescriptionServ.addPrescription(this.prescription).subscribe(
    res=>{
      console.log(res);
      this.confirmBox();
      
    
    },
    err=>{
      alert(err);
    }

   
    )}
  goBack(){
    this.router.navigate(['/Prescription']);
  }
}
