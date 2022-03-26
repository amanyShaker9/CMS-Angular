import { Component, OnInit } from '@angular/core';
import { DectorService } from 'src/app/Services/dector.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss']
})
export class DoctorProfileComponent implements OnInit {

  constructor(public doctoser: DectorService ) { }

  ngOnInit(): void {
  }

}
