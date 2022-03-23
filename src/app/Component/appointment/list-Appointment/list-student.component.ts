import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../Appointment-service';
import { Appointments } from 'src/app/Model/appointment';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  constructor(public _AppointmentService:AppointmentService) { }
  ngOnInit(): void {}

  // start using serves #getAllAppointmentsMethod
  appointArr:Appointments[]=this._AppointmentService.getAllAppointments();
  

//   // delete function
// deleteStudent(stuId:number){
//   let confirmtionMassageResult=confirm("Are you sure you want to delete this student");
//   if(confirmtionMassageResult== true){
//     for (let i=0;i<this.studentArr.length;i++){
//       if(this.studentArr[i].studentId==stuId){
//         this.studentArr.splice(i,1);
//       }
//     }
    
//   }
// }

// //show Details function
//  studentDetails:Student|null=null;
// showDetails(stu:Student){
//  this.studentDetails=stu;
// }

// // Edit data function
// editData(stuId:number){
// this.studentList.edit(stuId);
// }


}

