import { Component, OnInit } from '@angular/core';
import { EmployeeServicesService } from 'src/app/Services/employee-services.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {

  
  constructor(public Employeeser: EmployeeServicesService) { }

  ngOnInit(): void {
  }

}
