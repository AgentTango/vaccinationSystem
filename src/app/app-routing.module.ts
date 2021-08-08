import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatFormComponent } from './add-pat-form/add-pat-form.component';
import { AdminVaccFormComponent } from './admin-vacc-form/admin-vacc-form.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: '', component: AuthPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'adminVaccForm', component: AdminVaccFormComponent},
  {path: 'addPatForm', component: AddPatFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
