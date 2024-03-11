import { Component, Input } from '@angular/core';
import { Game } from '../../models/Game.model';

@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrl: './games-table.component.less'
})
export class GamesTableComponent {

  @Input() games!: Game[]
}
