import { Component, OnInit } from '@angular/core';
import {Hero} from "../../models/hero.model";
import {ActivatedRoute, Router} from "@angular/router";
import {HeroService} from "../../services/hero/hero.service";

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
    hero: Hero | undefined
  constructor(private route: ActivatedRoute, private heroService: HeroService,
              private router:Router) { }

  ngOnInit(): void {
      const id = Number.parseInt(this.route.snapshot.params.id);
      this.heroService.getHeroByID(id).then((hero) => {this.hero = hero});
  }
    onSubmitEditHero(hero: Hero): void  {
        this.heroService.update(hero).then(()=>this.router.navigateByUrl("heroes"))
    }
}
