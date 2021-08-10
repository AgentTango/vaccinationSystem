import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Patient } from '../models/patient.model';


@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private firestore: AngularFirestore) { 
    this.patients = this.firestorePatientsCollection.valueChanges();
   }
  firestorePatientsCollection = this.firestore.collection('patients');
  patients!: Observable<any[]>;

  getAllPatients(){
    
    return this.patients
  }

  //READ
  // getAllPatients(){
  //   const allPatients = this.firestorePatientsCollection.snapshotChanges().pipe(map(patients=>{
  //     const patient = patients[0];
  //     if (patient){
  //       const data = patient.payload.doc.data() as Patient[];
  //       // const id = patient.payload.doc.id;
  //       return {...data};
  //     }else {
  //       return null;
  //     }
  //   }));
  //   console.log(allPatients)
  //   return allPatients;
  // }

  //CREATE
  async addPatient(data: Patient): Promise<void>{
    try {
      await this.firestorePatientsCollection.add(data);
    } catch (error) {
      console.log(error);
    }
  }

  //DELETE
  async deletePatient(id: string): Promise<void>{
    try {
      await this.firestorePatientsCollection.doc(id).delete();
    } catch (error) {
      console.log(error);
    }
  }
}
