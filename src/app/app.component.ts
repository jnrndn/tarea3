import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

import { HeroService } from './hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour Of Heroes';
  heroes: Hero[];
  selectedHero : Hero;

  constructor( private heroService: HeroService ){}

  ngOnInit() {
    this.getHeroes();
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //       .then(heroes => this.heroes = heroes);
  // }

  //Simulate server latency with 2 seconds delay
  getHeroes(): void {
    this.heroService.getHeroesSlowly()
        .then(heroes => this.heroes = heroes);
  }
  
  onSelect(hero:Hero):void{ 
    this.selectedHero = hero;
  }
}
