import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['home']);
  }

  async logIn(){
    await this.auth.googleSignIn().then(at=>{
      this.router.navigate(['home']);
    });
    // console.log(this.auth.user$);
    // if (this.auth.user$) {
      // console.log("Sign in successful");
      // this.router.navigate(['home']);
    // } else {
      // console.log("Sign in unsuccessful");
    // }
  }

}
