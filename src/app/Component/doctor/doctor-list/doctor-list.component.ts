import { Component, OnInit } from '@angular/core';
import { Doctor} from 'src/app/Model/doctor';
import { DectorService } from 'src/app/Services/dector.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
  doctors:Doctor[]=[];

  constructor(public doctoser: DectorService ) { }

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
    this.doctoser.deleteDoctor(id).subscribe({next:a=>{console.log(a)}});
    this.addDoctor();
    
  }
  sendId(id:number){
    this.doctoser.doctorId=id;
  }

}
