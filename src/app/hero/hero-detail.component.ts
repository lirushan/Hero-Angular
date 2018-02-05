import {Component, Input} from "@angular/core";
import {Hero} from "../bean/hero";

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent{

  @Input()
  hero: Hero;


  public clearHero(){
    this.hero = null;
  }
}
