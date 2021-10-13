import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Hero} from "../../models/hero.model";
import {HeroService} from "../../services/hero/hero.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
    heroesSub:Subscription;
    heroes:Array<Hero>;

  constructor(private heroService:HeroService) {
      this.heroesSub = new Subscription();
      this.heroes = new Array<Hero>();
  }

    ngOnInit(): void {
        this.heroesSub = this.heroService.heroes.subscribe(heroes =>{
            console.log(heroes);
            this.heroes = heroes;
        } );
    }

    ngOnDestroy():void{
        this.heroesSub.unsubscribe();
    }

}
