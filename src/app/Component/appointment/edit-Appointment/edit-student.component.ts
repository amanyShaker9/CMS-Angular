import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppointmentService } from '../Appointment-service';
import { Appointments } from 'src/app/Model/appointment';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  //  show:boolean=false;
  editFlagStatues:number=0;
  constructor(public _AppointmentService :AppointmentService ) { }

  show():boolean{
    this.editFlagStatues=this._AppointmentService.editFlag;

    if(this.editFlagStatues==1){
      return true;
    }else{

      return false;

    }
  }
  AppointSelected:Appointments=this._AppointmentService.modifiedData;

  saveEdit(stuID:number){
    // this._AppointmentService.saveEdit(stuID);
    
  }

  ngOnInit(): void {

  }

  
}
