import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {Doctor} from '../../../Model/doctor';
import { Prescription } from 'src/app/Model/prescription';
import { Medicine} from 'src/app/Model/medicine';
import { PrescriptionService } from 'src/app/Services/prescription.service';
import { DectorService } from 'src/app/Services/dector.service';
import { MedicineService } from 'src/app/Services/medicine.service';
import { Patient } from 'src/app/Model/patient';
import { PatientService } from 'src/app/Services/patient.service';
@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.scss']
})
export class AddPrescriptionComponent implements OnInit {
  prescription :Prescription=new Prescription(0,{_id:0,firstName:"",lastName:""},{_id:0,firstName:"",lastName:""},{_id:0,medicineName:""});

    doctorArray:Doctor[]=[];
    medicineArray:Medicine[]=[];
    patientArray:Patient[]=[];

    doctorId:number=0;
    medId:number=0;
    patientId:number=0;

    patient_Fname="";
    patient_Lname="";

  constructor(public router:Router,public PrescriptionServ:PrescriptionService,public doctorServ:DectorService,public medicineServ:MedicineService,public patientServ:PatientService) { }
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
    this.allMedicine();
    this.allPatient();
  }
///////////
  allDoctor(){
    this.doctorServ.getDoctors().subscribe({
    
        next:a=>{this.doctorArray=a}   
    })
  }

  allMedicine(){
    this.medicineServ.getAllMedicine().subscribe({
      next:a=>{this.medicineArray=a}
    })
    console.log(this.medicineArray);
  }

  allPatient(){
this.patientServ.getAllPatients().subscribe({
  next:a=>{this.patientArray=a}
})
  }
  /////////////

getPatientId(){
for(let i=0;i<this.patientArray.length;i++){
  if(this.prescription.patient_id.firstName==this.patientArray[i].firstName &&this.prescription.patient_id.lastName==this.patientArray[i].lastName){
    this.prescription.patient_id._id=this.patientArray[i]._id;
  
  }else{
  
  }
}
alert("patient isnot exsist");
}

getDoctorId(){
  for(let i=0;i<this.doctorArray.length;i++){
    if(this.prescription.doctor_id._id=this.doctorArray[i]._id){
      this.prescription.doctor_id._id=this.doctorArray[i]._id;
      this.prescription.doctor_id.firstName=this.doctorArray[i].firstName;
      this.prescription.doctor_id.lastName=this.doctorArray[i].lastName;
    }else{
      alert("Doctor isnot exsist");
    }
  }
  }


  Add(){
   this.getDoctorId();
   this.getPatientId();
    this. PrescriptionServ.addPrescription({"pre_id":this.prescription.pre_id,"doctor_id": this.prescription.doctor_id._id,"patient_id":this.prescription.patient_id._id,"Med_id":this.prescription.Med_id._id}).subscribe(
    res=>{
      
      this.confirmBox();  
    },
    err=>{
      console.log(this.prescription);
      alert(err);
    }  
    )}
  goBack(){
    this.router.navigate(['/Prescription']);
  }
}
