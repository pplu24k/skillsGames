import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './screens/landing/landing.component';
import { GamesComponent } from './screens/games/games.component';
import { ManagingComponent } from './screens/managing/managing.component';
import { GameDetailComponent } from './screens/game-detail/game-detail.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SliderComponent } from './screens/landing/components/slider/slider.component';
import { GameListComponent } from './core/components/game-list/game-list.component';
import { LoginComponent } from './screens/games/login/login.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { GameComponent } from './core/components/game/game.component';
import { HttpClientModule } from '@angular/common/http';
import { GameSearchComponent } from './core/components/game-search/game-search.component';
import { NewGameDialogComponent } from './core/components/new-game-dialog/new-game-dialog.component';
import { GamesTableComponent } from './core/components/games-table/games-table.component';
import { SearchGamePipe } from './core/pipes/search-game.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    GamesComponent,
    ManagingComponent,
    GameDetailComponent,
    HeaderComponent,
    SliderComponent,
    GameListComponent,
    LoginComponent,
    FooterComponent,
    GameComponent,
    GameSearchComponent,
    NewGameDialogComponent,
    GamesTableComponent,
    SearchGamePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
