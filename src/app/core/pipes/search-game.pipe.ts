import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../models/Game.model';
import { GameFilter } from '../components/game-search/game-search.component';
import { filter } from 'rxjs';

@Pipe({
  name: 'searchGame',
  pure: false
})
export class SearchGamePipe implements PipeTransform {

  transform(value: Game[], filters: GameFilter): Game[] {
    console.log(filters)
    return value.filter((game) => {

      let isSearched = false
      let searchBreak = false
      if (filters.title != '') {
        if (game.title.includes(filters.title)) {
          isSearched = true
        }
        else {
          searchBreak = true
        }

      }

      if (filters.description != '') {
        if (game.description.includes(filters.description)) {
          isSearched = true
        }
        else {
          searchBreak = true
        }

      }

      if (filters.negatives) {
        if (game.negatives == filters.negatives) {
          isSearched = true
        }
        else {
          searchBreak = true
        }

      }

      if (filters.positives) {
        if (game.positives == filters.positives) {
          isSearched = true
        }
        else {
          searchBreak = true
        }

      }

      if (filters.theme) {
        if (game.themes.find((theme) => { return theme.id = filters.theme as number})) {
          isSearched = true
        }
        else {
          searchBreak = true
        }

      }
      if (searchBreak) {
        return false
      }
      return isSearched
    })

  }

}
