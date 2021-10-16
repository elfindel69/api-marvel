import { Component, OnInit } from '@angular/core';
import {Hero} from "../../models/hero.model";
import {HeroService} from "../../services/hero/hero.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  constructor(private heroService: HeroService,private router: Router) { }

  ngOnInit(): void {
  }

    onSubmitAddHero(hero: Hero) {
        this.heroService.save(hero).then(()=>{this.router.navigateByUrl("heroes")})
    }
}
