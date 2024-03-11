import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Theme } from '../../models/Theme.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {


  constructor(private _http: HttpClient) {
    this._themes = new ReplaySubject(1)
    this._themes.next(
      [
        new Theme(1,"Arcade"),
        new Theme(1,"Puzzle"),
        new Theme(1,"Aventuras"),
        new Theme(1,"Acción"),

      ]
    )
  }

  _themes:ReplaySubject<Theme[]>

  get themes(){
    return this._themes
  }
}
