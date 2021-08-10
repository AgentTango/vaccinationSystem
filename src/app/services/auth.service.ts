import { Injectable } from '@angular/core';

import { Router } from "@angular/router";
import  firebase from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { 
  AngularFirestore,
  AngularFirestoreDocument
 } from "@angular/fire/firestore";
 import { Observable, of } from "rxjs";
 import { switchMap } from "rxjs/operators";
 import { User } from "../models/user.model";
import { AuthPageComponent } from '../auth-page/auth-page.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$!: Observable<any>;
  public isLoggedIn!: boolean;

  constructor(
    private afAuth : AngularFireAuth,
    private afs : AngularFirestore,
    private router : Router,
  ) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user=>{
        if(user){
          this.isLoggedIn=true;
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged Out
          this.isLoggedIn=false;
          return of(null);
        }
      })
    );
   }

   async googleSignIn() {
     const provider = new firebase.auth.GoogleAuthProvider();
     const credential = await this.afAuth.signInWithPopup(provider);
     this.router.navigate(['home']);
     return this.updateUserData(credential.user);
   }

   private updateUserData({uid, email, displayName, photoURL}: User | any) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

    const data = { 
      uid,
      email,
      displayName,
      photoURL
    } 

    return userRef.set(data, { merge: true })

  }

  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }

}
