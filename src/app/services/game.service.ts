import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import { Jackpot } from '../models/jackpot.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http:HttpClient) { }
  findall(){
    return this.http.get<Game[]>("http://stage.whgstage.com/front-end-test/games.php");
  }
  findalljackpot(){
    return this.http.get<Jackpot[]>("http://stage.whgstage.com/front-end-test/jackpots.php");
  }

}
