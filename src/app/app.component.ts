import {Component, OnInit} from '@angular/core';
import {Hero} from './bean/hero';
import {HeroService} from './service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular 三国战纪英雄系列';
  hero: Hero;
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  public onSelectedHero(hero: Hero): void {
    this.selectedHero = hero;
    this.hero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

}

