import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Doctor} from 'src/app/Model/doctor';
import { DectorService } from 'src/app/Services/dector.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
  doctors:Doctor[]=[];

  constructor(public doctoser: DectorService ,public router:Router) { }

  ngOnInit(): void {
   this.addDoctor();
  }
  addDoctor(){

    this.doctoser.getDoctors().subscribe({

      next:a=>{this.doctors=a}

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
    this.doctoser.deleteDoctor(id).subscribe({next:a=>{console.log(a)}});
    this.addDoctor();

  }
  sendId(id:number){
    this.doctoser.doctorId=id;
  }


}
