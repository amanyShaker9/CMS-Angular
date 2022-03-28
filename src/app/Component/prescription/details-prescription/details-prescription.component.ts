import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prescription } from 'src/app/Model/prescription';
import { PrescriptionService } from 'src/app/Services/prescription.service';

@Component({
  selector: 'app-details-prescription',
  templateUrl: './details-prescription.component.html',
  styleUrls: ['./details-prescription.component.scss']
})
export class DetailsPrescriptionComponent implements OnInit {
  prescribtionObj :Prescription=new Prescription(0,{_id:0,firstName:"",lastName:""},{_id:0,firstName:"",lastName:""},{_id:0,medicineName:""});
  constructor(public presciptionServ:PrescriptionService,public router:Router,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.prescribtionObj.pre_id=this.ar.snapshot.params['id'];
    this.getOne();

  }

  
  getOne(){
   
    this.presciptionServ.getOnePrescription(this.prescribtionObj.pre_id!).subscribe(data=>{
      this.prescribtionObj=data;  
      
      }) 
    }
   goBack(){
     this.router.navigate(['/Prescription']);
   }

}
