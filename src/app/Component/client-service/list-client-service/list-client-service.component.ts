import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {Client_service} from 'src/app/Model/client-srvice';
import {ClientServiceService} from 'src/app/Services/client-service.service';
@Component({
  selector: 'app-list-client-service',
  templateUrl: './list-client-service.component.html',
  styleUrls: ['./list-client-service.component.scss']
})
export class ListClientServiceComponent implements OnInit {
  Client_services:Client_service[]=[];
  constructor(public cservices: ClientServiceService,public router:Router) { }

  ngOnInit(): void {
        this.addClient_service();
  }
  addClient_service(){

    this.cservices.getClient_services().subscribe({

      next:a=>{this.Client_services=a}

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
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          ' item has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          ' item not deleted',
          'error'
        )
      }
    })
    console.log(swalWithBootstrapButtons);
    this.cservices.deleteClient_service(id).subscribe({next:a=>{console.log(a)}});
    this.addClient_service();

  }
  sendId(id:number){
    this.cservices.Client_serviceId=id;
  }




}
