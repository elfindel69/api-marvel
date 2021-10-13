import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Hero} from "../../models/hero.model";
import {HeroService} from "../../services/hero/hero.service";

@Component({
  selector: 'app-single-hero',
  templateUrl: './single-hero.component.html',
  styleUrls: ['./single-hero.component.css']
})
export class SingleHeroComponent implements OnInit {
    hero: Hero|undefined;
  constructor(private heroService:HeroService,private route:ActivatedRoute) { }

  ngOnInit(): void {
      const id = this.route.snapshot.params.id;
      this.heroService.getHeroByID(id).then((heroes:Array<Hero>) => this.hero = heroes[0]);
  }

}
