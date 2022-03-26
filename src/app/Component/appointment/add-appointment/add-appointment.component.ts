import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit {


  constructor(public _AppointmentService:AppointmentService) { }
  allDoctors:any=[];
  allDoctorAppointment:any=[];

  ngOnInit(): void {
    this._AppointmentService.getAllDoctors().subscribe({
      next:(data)=>{
        this.allDoctors=data;
      }
    });

    // function to full doctor Appointment
    this._AppointmentService.getDoctorAppointment().subscribe({
      next:(data)=>{
        this.allDoctorAppointment=data;
      }
    })
   
  }

  // allAppointment(){
  //   this._AppointmentService.getDoctorAppointment().subscribe({
  //     next:(data)=>{
  //       this.allDoctorAppointment=data;
  //     }
  //   })
  // }

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

   add(){
    // i call this function to know the new data Added
    // this.allAppointment();
    this._AppointmentService.getDoctorAppointment().subscribe({
      next:(data)=>{
        this.allDoctorAppointment=data;
      }
    })
    //testing.................
    console.log(this.bookAppointment);
    console.log( this.allDoctorAppointment);
    console.log(this.bookAppointment.value.DoctorName);
    if(this.allDoctorAppointment.length !=0){
      console.log( this.allDoctorAppointment[0].doctorName);

    }
    
    //------------------------------------
  if(this.allDoctorAppointment.length !=0){
    debugger;
     for(let i=0; i<this.allDoctorAppointment.length;i++){
       if(this.bookAppointment.value.DoctorName==this.allDoctorAppointment[i].doctorName &&
        this.bookAppointment.value.AppointmentDate==this.allDoctorAppointment[i].appointmentDate  &&
        this.bookAppointment.value.AppointmentTime==this.allDoctorAppointment[i].appointmentTime
        ){

          alert("this time is not Avaliable , You can change time or day");
        }
     else{
      let newDoctorAppointment={
        DoctorName:this.bookAppointment.value.DoctorName,
        AappointmentDate: this.bookAppointment.value.AppointmentDate,
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
      })
     } // if end
    } // for End
  } // end first condition
  else{
    console.log("hello from else");
    let newDoctorAppointment={
      DoctorName:this.bookAppointment.value.DoctorName,
      AppointmentDate: this.bookAppointment.value.AppointmentDate,
      AppointmentTime:this.bookAppointment.value.AppointmentTime
     };
     console.log(newDoctorAppointment);
     this._AppointmentService.addDoctorAppointment(newDoctorAppointment).subscribe({
      next:(data)=>{
       console.log("Doctor Appointment"+data.message)
      }
    });

    this._AppointmentService.bookAppointment(this.bookAppointment.value).subscribe({
      next:(data)=>{
        
          console.log("Appointment"+data.message);
      },
    });
   
  }
  } // add function
}
