import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Game } from '../../models/Game.model';
import { RankingService } from '../../services/ranking/ranking.service';
import { Ranking } from '../../models/Ranking.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.less'
})
export class GameComponent {

  @Input() data!:Game
  @ViewChild("rankingDialog") rankingDialog!: ElementRef
  ranking!: Ranking[]

  constructor(private rankingService: RankingService){}

  showRanking(){
    this.rankingService.getRankingOf(this.data.id).subscribe((ranking) => {
      this.ranking = ranking
    })
    this.rankingDialog.nativeElement.showModal()
  }
  showModal(){
    this.rankingDialog.nativeElement.close()
  }

}
