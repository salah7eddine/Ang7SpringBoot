import { HardCodedAuthenticationService } from './../services/hard-coded-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isUserLoggedIn = false;

  constructor(private auth: HardCodedAuthenticationService) { }

  ngOnInit() {
     this.isUserLoggedIn = this.auth.isUserLoggedIn();
  }

}
