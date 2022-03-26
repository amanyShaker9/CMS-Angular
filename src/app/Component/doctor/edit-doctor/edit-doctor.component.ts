import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Model/doctor';
import { DectorService } from 'src/app/Services/dector.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss']
})
export class EditDoctorComponent implements OnInit {
  checkPass=false;
  id:number=this.doctoser.doctorId;

  newDoctor:Doctor=new Doctor(0,'','',0,0,'','','','',new Date(2020/11/11),{city:"",street:""},'','','');
  constructor( public doctoser: DectorService,public router:Router ) { }
  confirmsuccess(){
    Swal.fire({
      title: 'Doctor Updated Successfully',
      text: 'go to list to see changes!',
      icon: 'success',
      //showCancelButton: true,
      confirmButtonText: 'OK!',
    })
  }
  confirmerror(){
    Swal.fire({
      title: ' error in update doctor',
      text: 'check data that you enter!',
      icon: 'error',
      //showCancelButton: true,
      confirmButtonText: 'OK!',
    })
  }

  ngOnInit(): void {
    console.log(this.id);
    this.newDoctor._id= this.id;

    this.doctoser.getDoctorById(this.newDoctor._id).subscribe(

      {

        next:a=>{this.newDoctor=a}


      });
  }
  back(){
    this.router.navigate(['/doctor']);
  }


add(con:string){

  if(con==this.newDoctor.password){
    this.doctoser.updateDoctor(this.newDoctor,this.doctoser.doctorId).subscribe(

    {

      next:a=>{console.log(a),this.newDoctor=a}


    });
    this.checkPass=false;
    this.confirmsuccess();

 }else{
   this.checkPass=true;
 }
this.confirmerror()


}}
