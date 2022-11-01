import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logueado():boolean{

    let login = sessionStorage.getItem('token');

    if(login){

      return true;

    } else{

      return false;
    }
  }
}
