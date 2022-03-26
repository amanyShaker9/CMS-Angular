import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../../../Model/patient';
import { PatientService } from '../../../Services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  patients:Patient[]=[];
 
  constructor(public patientServ:PatientService,public router:Router) { }

  ngOnInit(): void {
    this.patientServ.getAllPatients().subscribe({
      next:a=>{this.patients=a;}
    })
  }
   //======================================================

 


  //=======================================================
  deleteById(id:number){
   alert("Are You Sure?");
    this.patientServ.deletePatient(id).subscribe(a=>{    
      //===============================================
      this.patientServ.getAllPatients().subscribe({
        next:a=>{this.patients=a;}
      })
    
  })
}


}
