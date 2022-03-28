import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/Model/patient';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {

  //patient:Patient=new Patient(0,"","","","",{street:0,city:"",country:""});

  constructor(public patientServ:PatientService,public router:Router,private ar:ActivatedRoute) { }
  //id:any;
  data:Patient=new Patient(0,"","","","",{street:0,city:"",country:""});
  ngOnInit(): void {
    this.data._id=this.ar.snapshot.params['id'];    
    this.patientServ.getOnePatient(this.data._id).subscribe(data=>{
    this.data=data;  
    
    }) 
  }
  
  editPatient(){
    this.patientServ.updatePatient(this.data._id,this.data).subscribe(data=>{
                  console.log(data);
        }   
    )
  }
  goBack(){
    this.router.navigate(['/patient']);
  }

}
