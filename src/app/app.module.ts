import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddPatFormComponent } from './add-pat-form/add-pat-form.component';
import { AdminVaccFormComponent } from './admin-vacc-form/admin-vacc-form.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const config = {
  apiKey: "AIzaSyCYnUcidk6OweXUJjlET_6GfkzWc1u83EA",
  authDomain: "vaccform-253ec.firebaseapp.com",
  projectId: "vaccform-253ec",
  storageBucket: "vaccform-253ec.appspot.com",
  messagingSenderId: "580131865145",
  appId: "1:580131865145:web:3f26a849962b57384603e8",
  measurementId: "G-6WSMNM46CC"
}

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    HomePageComponent,
    AddPatFormComponent,
    AdminVaccFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, BrowserAnimationsModule, // storage
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
