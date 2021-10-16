import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Hero} from "../../models/hero.model";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {map} from "rxjs/operators";
import {Md5} from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
    heroes: BehaviorSubject<Array<Hero>>;

    constructor(private httpClient: HttpClient, private authService: AuthService) {
        this.heroes = new BehaviorSubject<Array<Hero>>([]);
        this.getHeroes();

    }

    getHeroes(): void {
        const date = new Date().getTime().toString();
        let str = date + this.authService.privateKey + this.authService.apiKey.getValue();


        let hash = Md5.hashAsciiStr(str);
        console.log(hash);
        let params = new HttpParams()
            .set("apikey", this.authService.apiKey.getValue())
            .set("ts", date)
            .set("hash", hash);

        this.httpClient.get("https://gateway.marvel.com:443/v1/public/characters", {params})
            .pipe(map((data: any) => data.data.results.map((heroAsJSON: any) => Hero.fromJson(heroAsJSON))))
            .toPromise()
            .then((heroes: Array<Hero>) => this.heroes.next(heroes));
    }

    getHeroByID(id: number): Promise<Hero> {
        /*const date = new Date().getTime().toString();
        let str = date+this.authService.privateKey+this.authService.apiKey.getValue();


        let hash = Md5.hashAsciiStr(str);
        console.log(hash);
        let params = new HttpParams()
            .set("apikey",this.authService.apiKey.getValue())
            .set("ts",date)
            .set("hash",hash);


        //requête HTTP get
        return this.httpClient.get("https://gateway.marvel.com:443/v1/public/characters/"+id,{params})
            //transfomation du JSON en Array<Offer>
            .pipe(map((data:any) =>data.data.results.map( (heroAsJSON:any) => Hero.fromJson(heroAsJSON))))
            //transformation de l'observable en promise
            .toPromise();*/

        // Solution with the cache
        console.log(id);
        return new Promise<Hero>(
            (res, rej) => {

                const heroes = this.heroes.getValue();
                console.log(heroes);
                for (const hero of heroes) {
                    console.log(hero);
                    if (hero.id === id) {
                        console.log(hero);
                        res(hero);
                        break;
                    }
                }
            })


    }
    save(hero: Hero) :Promise<any>{
        const heroes = this.heroes.getValue();
        hero.id = heroes.length;
        heroes.push(hero);
        this.heroes.next(heroes);
       return new Promise<void>((res) => {res()})

    }

    update(heroEdited: Hero) :Promise<any> {
        const heroes = this.heroes.getValue();

        for (const[index, hero] of heroes.entries()) {
            if(hero.id === heroEdited.id){
                heroes[index] = heroEdited;
                this.heroes.next(heroes);
                break;
            }
        }
        return new Promise<void>((res) => {res()})
    }

    delete(id: number | null):Promise<any> {
        const heroes = this.heroes.getValue();
        for (const[index, hero] of heroes.entries()) {
            if(hero.id === id){
                heroes.splice(index,1);
                this.heroes.next(heroes);
                break;
            }
        }
        return new Promise<void>((res) => {res();})
    }
}
