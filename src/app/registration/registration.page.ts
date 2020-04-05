// Simo Partanen 1900414
// Inessa Rif    1901057
// Daniel Rif    1901058

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})

export class RegistrationPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit(){}
  // The signup function with email and password
  signUp(email, password){
    this.authService.RegisterUser(email.value, password.value)
    .then((res) => {
      // Then sending the verification email
      
      this.authService.SendVerificationMail()
      this.router.navigate(['verify-email']);
    }).catch((error) => {
      window.alert(error.message)
    })
}

}