import {Component, OnInit} from '@angular/core';
import {Hero} from '../../bean/hero';
import {HeroService} from '../../service/hero.service';

@Component({
  selector: 'hero-board',
  templateUrl: './hero-board.component.html',
  styleUrls: ['./hero-board.component.scss']
})
export class HeroBoardComponent implements OnInit {

  constructor(private heroService: HeroService) {
  }

  heroes: Hero[];

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(0, 4));
  }


}
