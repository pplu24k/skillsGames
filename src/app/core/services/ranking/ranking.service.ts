import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ranking } from '../../models/Ranking.model';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private _http: HttpClient) {

   }

   getRankingOf(gameId: number): Observable<Ranking[]>{
    const ranking: Ranking[] = [
      new Ranking(1,752,"pepe"),
      new Ranking(1,600,"angel"),
      new Ranking(1,400,"luis"),
      new Ranking(1,752,"pepe"),
      new Ranking(1,752,"pepe"),
      new Ranking(1,752,"pepe"),
      new Ranking(1,752,"pepe"),
      new Ranking(1,752,"pepe"),
      new Ranking(1,752,"pepe"),
      new Ranking(1,752,"pepe"),

    ]
    return of(ranking)
   }
}
