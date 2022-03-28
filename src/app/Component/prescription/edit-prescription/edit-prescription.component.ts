import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/Model/doctor';
import { Prescription } from 'src/app/Model/prescription';
import { PrescriptionService } from 'src/app/Services/prescription.service';
import {DectorService} from 'src/app/Services/dector.service'
@Component({
  selector: 'app-edit-prescription',
  templateUrl: './edit-prescription.component.html',
  styleUrls: ['./edit-prescription.component.scss']
})
export class EditPrescriptionComponent implements OnInit {
 prescription :Prescription=new Prescription();
 doctorArray:Doctor[]=[];
  constructor(public PrescriptionServ:PrescriptionService,public router:Router,private ar:ActivatedRoute,public doctorServ:DectorService) { }

  ngOnInit(): void {
    this.allDoctor();
    this.prescription.pre_id=this.ar.snapshot.params['id'];    
    this.PrescriptionServ.getOnePrescription(this.prescription.pre_id !).subscribe(data=>{
    this.prescription=data; })
  }


  allDoctor(){
    this.doctorServ.getDoctors().subscribe({
    
        next:a=>{this.doctorArray=a}   
    })
  }
  editPrescription(){
    this.PrescriptionServ.updatePrescription(this.prescription).subscribe(data=>{
                  console.log(data);
        }   
    )
  }
  goBack(){
    this.router.navigate(['/Prescription']);
  }


}
