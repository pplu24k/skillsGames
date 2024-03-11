import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from '../../services/games/games.service';
import { Game } from '../../models/Game.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.less'
})
export class GameListComponent implements OnInit{


  @Input() theme:string = ''
  @Input() filter:string = ''
  games!:Observable<Game[]> 
  @Input() filteredGames!:Game[]

  constructor(private gameService: GamesService){}

  
  ngOnInit(): void {
    if(!this.filteredGames){
      if(this.filter !== ''){
        this.games = this.gameService.getFilteredGames(this.filter)
      }
      else{
        this.games = this.gameService.getGamesOfATheme(this.theme)
      }
    }


  }


}
