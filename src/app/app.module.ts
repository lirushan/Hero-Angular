import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HeroDetailComponent} from "./pages/hero-detail/hero-detail.component";
import {HeroService} from "./service/hero.service";
import {HeroesComponent} from './pages/hero-list/heroes.component';
import {AppRoutingModule} from './app-routing.module';
import {HeroBoardComponent} from './pages/hero-board/hero-board.component';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';
import {MessageService} from './service/message.service';


@NgModule({
  declarations: [
    AppComponent, HeroDetailComponent, HeroesComponent, HeroBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
