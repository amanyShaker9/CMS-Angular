import { Component, OnInit } from '@angular/core';
import { Appointments } from 'src/app/Model/appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.scss']
})
export class ViewAppointmentComponent implements OnInit {

  allAppointments:Appointments[]=[]
  constructor(public _AppointmentService:AppointmentService) { }

  ngOnInit(): void {
    this.viewAllAppointment();
  }

viewAllAppointment(){
  this._AppointmentService.getAllAppointment().subscribe({
    next:(data)=>{
     this.allAppointments=data;
     console.log(this.allAppointments);
    }
  })

}
DeleteAppointment(id:Number){
  let result= confirm("Are you sure you want to delete this Appointment");
  if(result == true){
    this._AppointmentService.deleteAppointment(id).subscribe({
      next:(data)=>{
     console.log(data);
      }
    })
  }

   
}

}
