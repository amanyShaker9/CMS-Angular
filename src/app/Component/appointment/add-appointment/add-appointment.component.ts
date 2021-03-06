import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from '../appointment.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit {


  constructor(public _AppointmentService:AppointmentService ,private datePipe: DatePipe) { }
  allDoctors:any=[];
  allDoctorAppointment:any=[];

  ngOnInit(): void {
    this._AppointmentService.getAllDoctors().subscribe({
      next:(data)=>{
        this.allDoctors=data;
      }
    });
  }

  bookAppointment=new FormGroup({
    id:new FormControl('',Validators.required),
    PatientName:new FormControl('',Validators.required),
    PatientEmail:new FormControl('',Validators.required),
    PatientMobile:new FormControl('',Validators.required),
    PatientGender:new FormControl('',Validators.required),
    AppointmentDate:new FormControl('',Validators.required),
    AppointmentTime:new FormControl('',Validators.required),
    DoctorName:new FormControl('',Validators.required),
    Injuiry:new FormControl('',Validators.required),
  });

  LoopFlag:boolean=false;
   add(){
    this._AppointmentService.getDoctorAppointment().subscribe({
      next:(data)=>{
        this.allDoctorAppointment= data;
      }
    });

    //------------------------------------

    
  if(this.allDoctorAppointment.length !=0){
    
     for(let i=0; i<this.allDoctorAppointment.length;i++){
       if(this.bookAppointment.value.DoctorName==this.allDoctorAppointment[i].doctorName &&
        this.bookAppointment.value.AppointmentDate== this.datePipe.transform(this.allDoctorAppointment[i].appointmentDate,'yyyy-MM-dd')  &&
        this.bookAppointment.value.AppointmentTime==this.allDoctorAppointment[i].appointmentTime
        ){
          this.LoopFlag=true;
          alert("this time is not Avaliable , You can change time or day");
          break;
        }
      } // for End
    
      if(this.LoopFlag==false){
      let newDoctorAppointment={
        DoctorName:this.bookAppointment.value.DoctorName,
        AppointmentDate: this.bookAppointment.value.AppointmentDate,
        AppointmentTime:this.bookAppointment.value.AppointmentTime
       }
      this._AppointmentService.bookAppointment(this.bookAppointment.value).subscribe({
        next:(data)=>{
          console.log("Appointment"+data.message);
        },
        
      });
      this._AppointmentService.addDoctorAppointment(newDoctorAppointment).subscribe({
        next:(data)=>{
          console.log("Doctor Appointment"+data.message)
        }
      });
     
     } // if end
    
  } // end first condition
  else{
    console.log("hello from else");
    let newDoctorAppointment={
      DoctorName:this.bookAppointment.value.DoctorName,
      AppointmentDate: this.bookAppointment.value.AppointmentDate,
      AppointmentTime:this.bookAppointment.value.AppointmentTime
     };
     console.log("new Doctor Appointment",newDoctorAppointment);
     this._AppointmentService.addDoctorAppointment(newDoctorAppointment).subscribe({
      next:(data)=>{
       console.log("Doctor Appointment"+" "+data.message);
       
      }
    });
    console.log("this bookAppointment",this.bookAppointment.value);
    this._AppointmentService.bookAppointment(this.bookAppointment.value).subscribe({
      next:(data)=>{
        
          console.log("Appointment"+""+data.message);
      },
      error:(e)=>{
        console.log(e)
      }
    });
   
  }
  } // add function
}
