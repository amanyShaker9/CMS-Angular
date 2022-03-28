import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import {EmployeeServicesService  } from 'src/app/Services/employee-services.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  /*
  constructor(public employeeSer: EmployeeServicesService,public router:Router ) { }

  checkPass=false;
  */
  newEmployee:Employee=new Employee(0,'',0,'',new Date(2020/11/11),{City:"",Street:""},'');
  /*
  confirmsuccess(){
    Swal.fire({
      title: 'Employee Added Successfully',
      text: 'go to list to see changes!',
      icon: 'success',
      //showCancelButton: true,
      confirmButtonText: 'OK!',
    })
  }
  confirmerror(){
    Swal.fire({
      title: 'error occure during adding  data',
      text: 'check data that you enter!',
      icon: 'error',
      //showCancelButton: true,
      confirmButtonText: 'OK!',
    })
  }
  ngOnInit(): void {
  }
  back(){
    this.router.navigate(['/employee']);
  }
  Add(){
    this.employeeSer.addPatient(this.newEmployee).subscribe(a=>console.log(a));
    this.confirmBox();
   
  }
  goBack(){
    this.router.navigate(['/employee']);
  }
  */
  constructor(public router:Router,public employeeSer:EmployeeServicesService) { }

  confirmBox(){
    Swal.fire({
      title: 'employee Added Successfully',
      text: 'go to list to see changes!',
      icon: 'success',
      //showCancelButton: true,
      confirmButtonText: 'OK!',
    })
  }

  ngOnInit(): void {
  }
  Add(){
    this.employeeSer.addEmployee(this.newEmployee).subscribe(a=>console.log(a));
    this.confirmBox();
   
  }
  goBack(){
    this.router.navigate(['/employee']);
  }

}
