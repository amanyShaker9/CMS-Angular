import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Model/doctor';
import { DectorService } from 'src/app/Services/dector.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss']
})
export class EditDoctorComponent implements OnInit {
  newDoctor:Doctor=new Doctor(0,'','',0,0,'','','','',new Date(2020/11/11),{},'','','');
  constructor( public doctoser: DectorService,public router:Router ) { }

  ngOnInit(): void {
    this.newDoctor._id=this.doctoser.doctorId;
  }

  delete(id:number){
    this.doctoser.deleteDoctor(id);

  }

add(){

  this.doctoser.updateDoctor(this.newDoctor).subscribe(
         
    {
 
      next:a=>{console.log(a),this.newDoctor=a}
   
    });
 
   this.router.navigate(['/Doctor']);
}}
