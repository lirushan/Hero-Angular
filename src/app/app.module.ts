import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import {HeroDetailComponent} from "./pages/hero-detail/hero-detail.component";
import {HeroService} from "./service/hero.service";
import {HeroesComponent} from './pages/hero-list/heroes.component';
import {AppRoutingModule} from './app-routing.module';
import {HeroBoardComponent} from './pages/hero-board/hero-board.component';


@NgModule({
  declarations: [
    AppComponent, HeroDetailComponent, HeroesComponent, HeroBoardComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
