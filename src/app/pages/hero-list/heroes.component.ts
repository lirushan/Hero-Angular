import {Component, OnInit} from '@angular/core';
import {Hero} from '../../bean/hero';
import {HeroService} from '../../service/hero.service';
import {Router} from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: '../../pages/hero-list/heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: Hero;
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  public onSelectedHero(hero: Hero): void {
    this.selectedHero = hero;
    this.hero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().toPromise().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  }
}

