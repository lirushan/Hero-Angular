import {Injectable} from '@angular/core';
import {Hero} from '../bean/hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {MessageService} from './message.service';
// import {HEROES} from '../bean/mock-hero';

@Injectable()
export class HeroService {

  private heroUrl = "/api/HEROES";

  constructor(private http: HttpClient, private messageService: MessageService){}

  private log(message: string){
    this.messageService.add("HeroService:" + message);
  }

  getHeroes(): Observable<Hero[]> {
    // return Promise.resolve(HEROES);
    return this.http.get<Hero[]>(this.heroUrl);
  }

  private handleError(error: any): Promise<any>{
    console.log("An error occurred", error);
    return Promise.reject(error.message || error);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes().toPromise()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().toPromise().then(heroes => heroes.find(hero => hero.id === id));
  }
}
