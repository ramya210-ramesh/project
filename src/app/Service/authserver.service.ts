import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserverService {

  constructor() { }
  token(){
    if(localStorage.getItem("token")){
      return true
    }else{
      return false
    }
  }
}
