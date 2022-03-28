import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.scss']
})
export class EditAppointmentComponent implements OnInit {

  constructor(public _AppointmentService:AppointmentService) { }
  allDoctors:any=[];
  ngOnInit(): void {
    this._AppointmentService.getAllDoctors().subscribe({
      next:(data)=>{
        this.allDoctors=data;
      }
    })
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

  add(){
    console.log(this.bookAppointment);
    this._AppointmentService.editAppointment(this.bookAppointment.value).subscribe({
      next:(data)=>{
          console.log(data);
      }
    });
  //  console.log(this.bookAppointment);

  }
}
