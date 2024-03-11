import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './screens/landing/landing.component';
import { GamesComponent } from './screens/games/games.component';
import { ManagingComponent } from './screens/managing/managing.component';
import { GameDetailComponent } from './screens/game-detail/game-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'managing',
    component: ManagingComponent
  },
  {
    path: 'viewgame/:id',
    component: GameDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
