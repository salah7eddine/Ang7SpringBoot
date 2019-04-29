import { BasicAuthenticationService } from './../services/basic-authentication.service';
import { HardCodedAuthenticationService } from './../services/hard-coded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Salah';
  password = '';
  errorMessage = 'Invalid Credentieals';
  invalidLogin = false;

  // Router
  // Angular.giveMeRouter
  // Dependency Injection

  constructor(private router: Router,
              private auth: HardCodedAuthenticationService,
              private basicAuth: BasicAuthenticationService
  ) { }

  ngOnInit() {
  }

  handleLogin() {
    // if (this.username === 'Salah' && this.password === 'dummy') {
    if (this.auth.authenticate(this.username, this.password)) {
      // Redirect to Welcome page
      // this.router.navigateByUrl('welcome');
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
    // console.log(this.username);
  }


  handleBaiscAuthLogin() {
    this.basicAuth.executeAuthenticationService(this.username, this.password).subscribe(data => {
      console.log(data);
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    }, err => {
      console.log(err);
      this.invalidLogin = true;
    });
  }

  handleJWTAuthLogin() {
    this.basicAuth.executeJWTAuthenticationService(this.username, this.password).subscribe(data => {
      console.log(data);
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    }, err => {
      console.log(err);
      this.invalidLogin = true;
    });
  }
}
