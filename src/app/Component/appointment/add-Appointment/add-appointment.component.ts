import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Appointments } from 'src/app/Model/appointment';
import { AppointmentService } from '../Appointment-service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  constructor(private _AppointmentService:AppointmentService) { }


  AddNewAppointment=new FormGroup({
    
  })
  newAppointment:Appointments=new Appointments(0,"","","","","","","");
  // save(stu:Student){
  //   this.StudentADD.addNewStudent(stu);

  // }

  ngOnInit(): void {
  }

}
