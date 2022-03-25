import { Component, OnInit } from '@angular/core';
import { DectorService } from 'src/app/Services/dector.service';

@Component({
  selector: 'app-delete-doctor',
  templateUrl: './delete-doctor.component.html',
  styleUrls: ['./delete-doctor.component.scss']
})
export class DeleteDoctorComponent implements OnInit {

  constructor(public doctoser: DectorService ) { }

  ngOnInit(): void {
  }

}
