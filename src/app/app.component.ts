import { Component } from '@angular/core';
import { Medicine } from './Model/medicine';
import { MedicineService } from './Services/medicine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[MedicineService]
})
export class AppComponent {
  title = 'CMS';
}
