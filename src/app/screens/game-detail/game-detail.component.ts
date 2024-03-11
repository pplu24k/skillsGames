import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../../core/models/Game.model';
import { GamesService } from '../../core/services/games/games.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrl: './game-detail.component.less'
})
export class GameDetailComponent {

  game!: Game

  constructor(private route:ActivatedRoute,private gameService:GamesService){
    this.gameService.getGame(this.route.snapshot.params['id']).subscribe(data => {
      console.log(data)
      this.game = data
    })
  }




}
