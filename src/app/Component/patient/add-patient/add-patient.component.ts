import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Patient } from 'src/app/Model/patient';
import { User } from 'src/app/Model/user';
import { PatientService } from 'src/app/Services/patient.service';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  patientObj:Patient=new Patient(0,"","","","",{street:0,city:"",country:""});
  constructor(public router:Router,public patientServ:PatientService) { }

  confirmBox(){
    Swal.fire({
      title: 'Patient Added Successfully',
      text: 'go to list to see changes!',
      icon: 'success',
      //showCancelButton: true,
      confirmButtonText: 'OK!',
    })
  }

  ngOnInit(): void {
  }
  Add(){
    this.patientServ.addPatient(this.patientObj).subscribe(a=>console.log(a));
    this.confirmBox();
   
  }
  goBack(){
    this.router.navigate(['/patient/list']);
  }
}
