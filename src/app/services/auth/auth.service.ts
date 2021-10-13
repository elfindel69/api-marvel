import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    privateKey: string;
    apiKey: string;
  constructor() {
      this.apiKey = "6c24593d7289e32b6c30e3b1503a27ba";
      this.privateKey = "f38bcf82905c38ce8968ed9bac8f0592a371f176"
  }
}
