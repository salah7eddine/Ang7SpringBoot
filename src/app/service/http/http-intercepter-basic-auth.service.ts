import { BasicAuthenticationService } from './../../services/basic-authentication.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // const username = 'Salah';
    // const password = 'dummy';
    // const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    const basicAuthHeaderString = this.basicAuthenticationService.getAutenticatedToken();
    const username = this.basicAuthenticationService.getAutenticatedUser();

    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }

    return next.handle(request);

  }



}
