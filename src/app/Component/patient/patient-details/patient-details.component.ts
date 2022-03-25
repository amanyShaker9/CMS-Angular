import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/Model/patient';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {

//onePatient:Patient=new Patient(0,"nn","mm","mm","nn",{street:0,city:"mm",country:"nn"});

data:Patient=new Patient(0,"","","","",{street:0,city:"",country:""});
  constructor(public patientServ:PatientService,public router:Router,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.data._id=this.ar.snapshot.params['id'];
    this.getOne();
  }

  getOne(){
   
  this.patientServ.getOnePatient(this.data._id).subscribe(data=>{
    this.data=data;  
    
    }) 
  }
 goBack(){
   this.router.navigate(['/patient']);
 }
}
