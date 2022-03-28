import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Employee} from 'src/app/Model/employee';
import { EmployeeServicesService } from 'src/app/Services/employee-services.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  newEmployee:Employee=new Employee(0,'',0,'',new Date(2020/11/11),{City:"",Street:""},'');
  constructor(public Employeeser: EmployeeServicesService ,public router:Router) { }
  back(){
    this.router.navigate(['/employee']);
  }
  ngOnInit(): void {
    this.newEmployee.Id= this.Employeeser.employeeId;

    this.Employeeser.getEmployeeById(this.newEmployee.Id).subscribe(

      {

        next:a=>{this.newEmployee=a}


      });
  }

}
