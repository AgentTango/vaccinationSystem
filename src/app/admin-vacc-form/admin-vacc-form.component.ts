import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
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
  displayedColumns: string[] = ['name', 'age', 'brandGiven', 'dueDate', 'givenOn'];
  sortedData!: Patient[];


  ngOnInit(): void {
    this.firebase.getAllPatients().subscribe(patients=> {
      this.arrOfPatients = patients;
      console.log(this.arrOfPatients);
    })
  }

  sortData(sort: Sort){
    const data = this.arrOfPatients.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a,b)=>{
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'age': return compare(a.dob, b.dob, isAsc);
        case 'dueDate': return compare(a.dueDate, b.dueDate, isAsc);
        case 'brandGiven': return compare(a.brandGiven, b.brandGiven, isAsc);
        default: return 0;
      }
    });

  }


}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
