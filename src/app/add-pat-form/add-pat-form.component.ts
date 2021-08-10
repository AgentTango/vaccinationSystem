import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from "@angular/material/dialog";
import { FirebaseServiceService } from "../services/firebase-service.service";
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-add-pat-form',
  templateUrl: './add-pat-form.component.html',
  styleUrls: ['./add-pat-form.component.scss']
})
export class AddPatFormComponent implements OnInit {

  myform!: FormGroup;
  bloodGroupOptions!:string[];
  name!: FormControl;
  dose!: FormControl;
  doseOptions!:string[];
  // lastName!: FormControl;
  dob!: FormControl;
  gender!:FormControl;
  genderOptions!: string[];
  birthLocation!:FormControl;
  bloodGroup!:FormControl;
  height!:FormControl;
  weight!:FormControl;


  constructor(private patientService:FirebaseServiceService){}

  ngOnInit(){
    this.createFormControls();
    this.createForm();
  }

  createFormControls(){
    this.name = new FormControl('', Validators.required);
    // this.lastName = new FormControl('', Validators.required);
    this.dob = new FormControl('', Validators.required);
    this.doseOptions = ["Dose 1", "Dose 2"];
    this.dose = new FormControl(this.doseOptions[0].toString(), Validators.required);
    this.genderOptions = ["Male", "Female", "Others"];
    this.gender = new FormControl(this.genderOptions[0].toString(), Validators.required);
    this.birthLocation = new FormControl("", Validators.required);
    this.bloodGroupOptions = ['O+.','O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];
    this.bloodGroup = new FormControl(this.bloodGroupOptions[0].toString(),Validators.required);
    this.height = new FormControl("", Validators.required);
    this.weight = new FormControl("", Validators.required);
  }

  createForm(){
    this.myform = new FormGroup({
      name: this.name,
      // lastName: this.lastName,
      dob: this.dob,
      gender: this.gender,
      birthLocation: this.birthLocation,
      bloodGroup: this.bloodGroup,
      weight: this.weight,
      height: this.height,
      dose: this.dose
    });
  }

  onRegister(){
    //send to firebase
    this.patientService.addPatient(this.myform.value);
    console.log(this.myform.value);
    this.myform.reset();
  }

  onCancel(){
    this.myform.reset();
  }

}
