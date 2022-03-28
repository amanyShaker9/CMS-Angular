import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Employee} from 'src/app/Model/employee';
import { EmployeeServicesService } from 'src/app/Services/employee-services.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees:Employee[]=[];

  constructor(public Employeeser: EmployeeServicesService ,public router:Router) { }

  ngOnInit(): void {
   this.addEmployee();
  }
  addEmployee(){

    this.Employeeser.getEmployees().subscribe({

      next:a=>{this.employees=a}

    // next:a=>{console.log(a)}
    });
  }


  delete(id:number){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You wont to delete this item!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
    console.log(swalWithBootstrapButtons);
    this.Employeeser.deleteEmployee(id).subscribe({next:a=>{console.log(a)}});
    this.addEmployee();

  }
  sendId(id:number){
    this.Employeeser.employeeId=id;
  }

}
