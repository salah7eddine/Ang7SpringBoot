import { API_URL } from './../../app.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
    // console.log('Execute Hello World Bean Service');
  }

  // http://localhost:8080/hello-world/path-variable/mizo
  executeHelloWorldServiceWithPathVariable(name) {
    // const basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // const headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });

    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`, 
    // {headers}
    );
  }

  // createBasicAuthenticationHttpHeader() {
  //   const username = 'Salah';
  //   const password = 'dummy';
  //   const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }

}
