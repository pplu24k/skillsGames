import { Component, Input } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { Observable } from 'rxjs';
import { Theme } from '../../models/Theme.model';
import { GamesService } from '../../services/games/games.service';
import { Game } from '../../models/Game.model';

export type GameFilter = {
  title:string,
  description: string,
  positives:number |null,
  negatives:number |null,
  theme:number |null
}

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrl: './game-search.component.less'
})
export class GameSearchComponent {

  constructor(private themeService: ThemeService, private gameService: GamesService){
  }

  filters:GameFilter = {
    title: '',
    description: '',
    positives: null,
    negatives: null,
    theme: null
  }

  @Input() adminSearch:boolean = false

  themes:Observable<Theme[]> = this.themeService.themes

  games: Observable<Game[]> = this.gameService.games



}
