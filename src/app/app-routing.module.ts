import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './pages/hero-list/heroes.component';
import {HeroBoardComponent} from './pages/hero-board/hero-board.component';
import {HeroDetailComponent} from './pages/hero-detail/hero-detail.component';

const routes: Routes = [
  {path: '',redirectTo: '/hero-board' , pathMatch: 'full'},
  {path: 'heroes', component:  HeroesComponent},
  {path: 'hero-board', component:  HeroBoardComponent},
  {path: 'detail/:id', component:  HeroDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}


