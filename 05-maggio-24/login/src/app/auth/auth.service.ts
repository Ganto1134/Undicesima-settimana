import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { iUser } from '../Models/i-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService();

  authSubject = new BehaviorSubject<null|iUser>(null);

  user$ = this.authSubject.asObservable();

  constructor() { }

  loginUrl:string = 'http://localhost:3000/login';
  registerUrl:string = 'http://localhost:3000/register';

  register(){

  }

  login(){

  }

  logout(){

  }

  autoLogout(){

  }

  getAccessToken(){

  }

  restoreUser(){

  }


}
