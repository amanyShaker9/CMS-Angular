import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import { EmployeeServicesService } from 'src/app/Services/employee-services.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
 constructor(public EmployeeServ:EmployeeServicesService,public router:Router,private ar:ActivatedRoute) { }
 //id:any;
 newEmployee:Employee=new Employee(0,'',0,'',new Date(2020/11/11),{City:"",Street:""},'');;
 ngOnInit(): void {
   this.newEmployee.Id=this.ar.snapshot.params['id'];    
   this.EmployeeServ.getEmployeeById(this.newEmployee.Id).subscribe(data=>{
   this.newEmployee=data;  
   
   }) 
 }
 
 editEmployee(){
   this.EmployeeServ.updateEmployee(this.newEmployee,this.EmployeeServ.employeeId).subscribe(data=>{
                 console.log(data);
       }   
   )
 }
 goBack(){
   this.router.navigate(['/employee']);
 }
}
