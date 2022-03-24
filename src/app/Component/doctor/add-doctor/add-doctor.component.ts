import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Model/doctor';
import { DectorService } from 'src/app/Services/dector.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {

  constructor(public doctoser: DectorService,public router:Router ) { }

  checkPass=false;
  newDoctor:Doctor=new Doctor(0,'','',0,0,'','','','',new Date(2020/11/11),{city:"",street:""},'','','');
  ngOnInit(): void {
  }
  add(con:string){
    console.log(con);
    console.log(this.newDoctor.password)
    if(con==this.newDoctor.password){
      this.doctoser.addDoctor(this.newDoctor).subscribe(

        {

          next:a=>{console.log(a),this.newDoctor=a}

        });
        this.checkPass=false;
         this.router.navigate(['/Doctor']);
    }else{
      this.checkPass=true;
    }

  }

}
