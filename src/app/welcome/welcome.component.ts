import { WelcomeDataService } from './../service/data/welcome-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message';
  welcomeMessageFromService: string;
  name = '';

  // ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) { }

  ngOnInit() {
    // COMPILATION ERROR this.message = 5;
    // console.log(this.message);
    // console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(data => {
      this.handleSuccessfulResponse(data);
      // console.log(data.message);
    }, error => {
      this.handleErrorResponse(error);
    });
    console.log('last line of getWelcomeMessage');

    // console.log('get welcome message');
  }

  getWelcomeMessageWithParameter() {
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(data => {
      this.handleSuccessfulResponse(data);
      // console.log(data.message);
    }, error => {
      this.handleErrorResponse(error);
    });
  }

  handleSuccessfulResponse(response) {
    // console.log(response);
    // console.log(response.message);
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
    /* console.log(error);
    console.log(error.error);
    console.log(error.error.message); */
    this.welcomeMessageFromService = error.error.message;
  }

}
