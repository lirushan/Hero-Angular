import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../bean/hero";
import {HeroService} from '../../service/hero.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit{

  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location){}


  @Input()
  hero: Hero;


  // 1、定义路由
  // 2、定义接口
  // 3、定义service
  ngOnInit(): void {
    // +号: 将字母转换成数值
    this.route.paramMap.switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id'))).subscribe(hero => this.hero = hero);
  }


  public clearHero(){
    this.hero = null;
  }

  goBack():void {
    this.location.back();
  }
}
