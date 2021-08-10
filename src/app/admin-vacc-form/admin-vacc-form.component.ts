import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-vacc-form',
  templateUrl: './admin-vacc-form.component.html',
  styleUrls: ['./admin-vacc-form.component.scss']
})
export class AdminVaccFormComponent implements OnInit {

  myform!: FormGroup;
  bloodGroupOptions!:string[];
  firstName!: FormControl;
  lastName!: FormControl;
  dob!: FormControl;
  gender!:FormControl;
  birthLocation!:FormControl;
  bloodGroup!:FormControl;
  height!:FormControl;
  weight!:FormControl;



  ngOnInit(){
    this.createFormControls();
    this.createForm();
  }

  createFormControls(){
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.dob = new FormControl('', [
      Validators.required,
    ]);
    this.dob = new FormControl("", Validators.required);
    this.gender = new FormControl("", Validators.required);
    this.birthLocation = new FormControl("", Validators.required);
    this.bloodGroupOptions = ['O+.','O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];
    this.bloodGroup = new FormControl(this.bloodGroupOptions[0].toString(),Validators.required);
    this.height = new FormControl("", Validators.required);
    this.weight = new FormControl("", [
      Validators.required,
    ]);
  }

  createForm(){
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      dob: this.dob,
      gender: this.gender,
      birthLocation: this.birthLocation,
      bloodGroup: this.bloodGroup,
      weight: this.weight,
      height: this.height,
    });
  }

  onRegister(){
    //send to firebase
    console.log(this.myform.value)
  }

}
