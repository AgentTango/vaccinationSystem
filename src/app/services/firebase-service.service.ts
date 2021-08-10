import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Patient } from '../models/patient.model';


@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private firestore: AngularFirestore) { }
  firestorePatientsCollection = this.firestore.collection('patients');

  //READ
  // patients$ = this.firestorePatientsCollection.snapshotChanges().pipe(
  //   map(actions=>{
  //     return actions.map(at=>{
  //       const a = at.payload.doc;
  //       const b = a.id;
  //       return {b, ...(a.data() as {})} as Patient;
  //     })
  //   })
  // );

  //READ
  patient(){
    this.firestorePatientsCollection.get().subscribe(at=>{
      const temp = at.docs.map(item=>{
        return item.data();
      });
      console.log(temp);
    });
  }

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
