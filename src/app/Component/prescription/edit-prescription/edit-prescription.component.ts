import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/Model/doctor';
import { Prescription } from 'src/app/Model/prescription';
import { PrescriptionService } from 'src/app/Services/prescription.service';
import {DectorService} from 'src/app/Services/dector.service'
import { Medicine } from 'src/app/Model/medicine';
import { MedicineService } from 'src/app/Services/medicine.service';
import { Patient } from 'src/app/Model/patient';
import { PatientService } from 'src/app/Services/patient.service';
@Component({
  selector: 'app-edit-prescription',
  templateUrl: './edit-prescription.component.html',
  styleUrls: ['./edit-prescription.component.scss']
})
export class EditPrescriptionComponent implements OnInit {

 prescription :Prescription=new Prescription(0,{_id:0,firstName:"",lastName:""},{_id:0,firstName:"",lastName:""},{_id:0,medicineName:""});
 doctorArray:Doctor[]=[];
 medicineArray:Medicine[]=[];
 patientArray:Patient[]=[];

  constructor(public PrescriptionServ:PrescriptionService,public router:Router,private ar:ActivatedRoute,public doctorServ:DectorService,public medicineServ:MedicineService,public patientServ:PatientService) { }

  ngOnInit(): void {
    this.allDoctor();
    this. allMedicine();
    this.allPatient();

    this.prescription.pre_id=this.ar.snapshot.params['id'];    
    this.PrescriptionServ.getOnePrescription(this.prescription.pre_id).subscribe(data=>{
      console.log(data+"hello");
   
    this.prescription.doctor_id._id=data.doctor_id._id;  console.log(data.doctor_id._id+"hello");
    this.prescription.patient_id.firstName=data.patient_id.firstName; console.log(data.patient_id.firstName+"hello");
    this.prescription.patient_id.lastName=data.patient_id.lastName;console.log(data.patient_id.lastName+"hello");
    this.prescription.Med_id._id=data.Med_id._id;console.log(data.Med_id._id+"hello");
  })

    
  }


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


  editPrescription(){
    this.getPatientId();
    this.PrescriptionServ.updatePrescription({"pre_id":this.prescription.pre_id,"doctor_id": this.prescription.doctor_id._id,"patient_id":this.prescription.patient_id._id,"Med_id":this.prescription.Med_id._id}).subscribe(data=>{
                  console.log(data);
        }   
    )
  }
  goBack(){
    this.router.navigate(['/Prescription']);
  }


}
