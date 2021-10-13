import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    privateKey: string;
    apiKey: BehaviorSubject<string>;
  constructor() {
      this.apiKey = new BehaviorSubject<string>("6c24593d7289e32b6c30e3b1503a27ba");
      this.privateKey = "f38bcf82905c38ce8968ed9bac8f0592a371f176"
  }

    logout():Promise<void>{
        return new Promise<void>((res, rej) =>{
            this.apiKey.next('');
            res();
        })
    }

    login():Promise<boolean>{
        return new Promise((res,rej) =>{res(true)});
    }
}
