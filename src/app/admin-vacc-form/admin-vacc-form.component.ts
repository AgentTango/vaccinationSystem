import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Patient } from '../models/patient.model';
import { FirebaseServiceService } from '../services/firebase-service.service';


@Component({
  selector: 'app-admin-vacc-form',
  templateUrl: './admin-vacc-form.component.html',
  styleUrls: ['./admin-vacc-form.component.scss']
})
export class AdminVaccFormComponent implements OnInit {

  constructor(private firebase: FirebaseServiceService) { }
  arrOfPatients!: Patient[];
  displayedColumns: string[] = ['name', 'dose', 'age', 'gender'];


  ngOnInit(): void {
    this.firebase.getAllPatients().subscribe(patients=> {
      this.arrOfPatients = patients;
      console.log(this.arrOfPatients);
    })
  }


}

