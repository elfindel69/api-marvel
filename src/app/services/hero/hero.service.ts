import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Hero} from "../../models/hero.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {map} from "rxjs/operators";
import {Md5} from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
    heroes: BehaviorSubject<Array<Hero>>;
  constructor(private httpClient:HttpClient, private authService:AuthService) {
      this.heroes = new BehaviorSubject<Array<Hero>>([]);
      this.getHeroes();

  }

  getHeroes():void{
      const date = new Date().getTime().toString();
      let str = date+this.authService.privateKey+this.authService.apiKey;


      let hash = Md5.hashAsciiStr(str);
      console.log(hash);
      let params = new HttpParams()
          .set("apikey",this.authService.apiKey)
          .set("ts",date)
          .set("hash",hash);

      this.httpClient.get("https://gateway.marvel.com:443/v1/public/characters",{params})
          .pipe(map((data:any) =>data.data.results.map( (heroAsJSON:any) => Hero.fromJson(heroAsJSON))))
          .toPromise()
          .then((heroes:Array<Hero>)=>this.heroes.next(heroes) );
  }
}
