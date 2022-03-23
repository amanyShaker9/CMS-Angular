import { Injectable } from '@angular/core';
import {Appointments} from '../../Model/appointment';
@Injectable({
  providedIn: 'root'
})

export class AppointmentService {

  appointments:Appointments[]=[
    
  ]
  constructor() { }

  // get Appointments function that use in list component
  getAllAppointments(){
    return this.appointments;
  }

  // // Add student function that use in Add component

  //   addNewStudent(stu:Student){
  //     this.students.push(new Student(stu.studentId,stu.studentName,stu.studentGrade,stu.studentAge,stu.studentAddress));

  //   }

  // // Edit student Data function that use in Listcomponent
   editFlag:number=0;
    modifiedData:Appointments=new Appointments(0,"","","","","","","");
    
  // edit(ID:number){
  //      this.editFlag=1;
  //      console.log(" from service ts "+ this.editFlag)

  //     for(let i=0;i<this.students.length ;i++){
  //       if(this.students[i].studentId==ID){
  //        //  this.modifiedData=this.students[i];  # this way cause problem not effective
  //         this.modifiedData.studentId=this.students[i].studentId;
  //         this.modifiedData.studentName=this.students[i].studentName;
  //         this.modifiedData.studentGrade=this.students[i].studentGrade;
  //         this.modifiedData.studentAge=this.students[i].studentAge;
  //         this.modifiedData.studentAddress=this.students[i].studentAddress;
  //         return;
  //       }
  //     }
  //   }

  //  // Edit student Data function that use in Editcomponent
  //  saveEdit(Id:number){
  //     for(let i=0;i<this.students.length ;i++){
  //       if(this.students[i].studentId==Id){
  //         //  this.students[i]=this.modifiedData;  # this way cause problem autochange
  //         this.students[i].studentId=this.modifiedData.studentId;
  //         this.students[i].studentName= this.modifiedData.studentName;
  //         this.students[i].studentGrade=this.modifiedData.studentGrade;
  //         this.students[i].studentAge= this.modifiedData.studentAge;
  //         this.students[i].studentAddress= this.modifiedData.studentAddress;
  //         this.editFlag=0;
  //          return;
  //       }
  //  }


  // }

}
