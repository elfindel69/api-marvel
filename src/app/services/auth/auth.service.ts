import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    privateKey: string;
    apiKey: BehaviorSubject<string>;
    email: string;
    password: string;
  constructor() {
      this.apiKey = new BehaviorSubject<string>("");
      this.privateKey = "f38bcf82905c38ce8968ed9bac8f0592a371f176";
        this.email = "elfindel69@gmail.com";
        this.password = "azerty";
  }

    logout():Promise<void>{
        return new Promise<void>((res, rej) =>{
            this.apiKey.next('');
            res();
        })
    }

    login(email:string, password:string):Promise<boolean>{
      if(this.email === email && this.password === password){
          return new Promise((res,rej) =>{
              this.apiKey.next('6c24593d7289e32b6c30e3b1503a27ba');
              res(true)});
      }
        return new Promise((res,rej) =>{res(false)});
    }
}
