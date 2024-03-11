import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, map, of } from 'rxjs';
import { Game } from '../../models/Game.model';
import { Theme } from '../../models/Theme.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {


  _games:ReplaySubject<Game[]>
  _gamesArr: Game[] = []

  constructor(private _http: HttpClient) {
    this._games = new ReplaySubject(1)
    this._gamesArr = [
      
      new Game(1,'/assets/imgs/games/game1.jpg',"game 1", "description of the game", 84, 37,[new Theme(1,"Fights")], 1),
      new Game(1,'/assets/imgs/games/game1.jpg',"game 1", "description of the game", 84, 37,[new Theme(1,"Fights")], 1),
      new Game(1,'/assets/imgs/games/game1.jpg',"game 1", "description of the game", 84, 37,[new Theme(1,"Fights")], 1),
      new Game(1,'/assets/imgs/games/game1.jpg',"game 1", "description of the game", 84, 37,[new Theme(1,"Fights")], 1),
      new Game(1,'/assets/imgs/games/game1.jpg',"game 1", "description of the game", 84, 37,[new Theme(1,"Fights")], 1),
      new Game(1,'/assets/imgs/games/game1.jpg',"game 1", "description of the game", 84, 37,[new Theme(1,"Fights")], 1),
      new Game(1,'/assets/imgs/games/game1.jpg',"game 1", "description of the game", 84, 37,[new Theme(1,"Fights")], 1),
      
     
   ]
    this._games.next([
      
      new Game(1,'/assets/imgs/games/game1.jpg',"game 1", "description of the game", 84, 37,[new Theme(1,"Fights")], 1),
      new Game(1,'/assets/imgs/games/game1.jpg',"game 1", "description of the game", 84, 37,[new Theme(1,"Fights")], 1),
      new Game(1,'/assets/imgs/games/game1.jpg',"game 1", "description of the game", 84, 37,[new Theme(1,"Fights")], 1),
      new Game(1,'/assets/imgs/games/game1.jpg',"game 1", "description of the game", 84, 37,[new Theme(1,"Fights")], 1),
      new Game(1,'/assets/imgs/games/game1.jpg',"game 1", "description of the game", 84, 37,[new Theme(1,"Fights")], 1),
      new Game(1,'/assets/imgs/games/game1.jpg',"game 1", "description of the game", 84, 37,[new Theme(1,"Fights")], 1),
      new Game(1,'/assets/imgs/games/game1.jpg',"game 1", "description of the game", 84, 37,[new Theme(1,"Fights")], 1),
      
     
   ])

   }

  getGamesOfATheme(theme:string):Observable<Game[]>{
    return this._games.pipe(map((games) => {
      return games.filter((game) => {return game})
    }));
  }

  getGame(id:number):Observable<Game>{
    return of(this._gamesArr.find(game => {
      return game.id == id}) as Game) 
  }

  getFilteredGames(filter: string): Observable<Game[]> {
    return of([
      
      new Game(1,'/assets/imgs/games/game1.jpg',"game 1", "description of the game", 84, 37,[new Theme(1,"Fights")], 1),
      new Game(1,'/assets/imgs/games/game1.jpg',"game 1", "description of the game", 84, 37,[new Theme(1,"Fights")], 1),
      new Game(1,'/assets/imgs/games/game1.jpg',"game 1", "description of the game", 84, 37,[new Theme(1,"Fights")], 1),
      new Game(1,'/assets/imgs/games/game1.jpg',"game 1", "description of the game", 84, 37,[new Theme(1,"Fights")], 1),
      new Game(1,'/assets/imgs/games/game1.jpg',"game 1", "description of the game", 84, 37,[new Theme(1,"Fights")], 1),
      new Game(1,'/assets/imgs/games/game1.jpg',"game 1", "description of the game", 84, 37,[new Theme(1,"Fights")], 1),
     
   ])
  }

  get games(){
    return this._games
  }


}
