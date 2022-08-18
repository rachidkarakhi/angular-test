import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Subscription } from "rxjs";
import { Game } from "src/app/models/game.model";
import { Jackpot } from "src/app/models/jackpot.model";
import { CommonService } from "src/app/services/common.service";
import { GameService } from "../game.service";
@Component({
  selector: 'game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit,OnDestroy {
  games : Game[]=[]
  subscription:Subscription
  showedGames : Game[]=[]
  showedJackpotsGames : Game[]=[]
  jackpots : Jackpot[]=[]
  sub:any
  active : string
  categories: string[]=['top','new','slots','jackpots','live','blackjack','roulette','table','poker','other']
  constructor(private gameService:GameService,private commonService :CommonService) { }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  ngOnInit(): void {
    this.getalljackpost();
    this.getAllGames();
    this.subscription=this.commonService.publishCatEvent.subscribe(data =>{
      this.active=data;
      localStorage.setItem('active', data);
       this.filter(data);
    })
    if (sessionStorage.getItem('active')) {
      this.active=sessionStorage.getItem('active')
    }
    this.sub =  interval(10000)
    .subscribe(() => {
      this.getalljackpost();
    });

  }
  getalljackpost(){
    this.gameService.findalljackpot().subscribe(jackpots =>{
      this.showedJackpotsGames=[];
      this.jackpots = jackpots;


        console.log("called")
      for (let i = 0; i < this.games.length; i++) {
        var index = this.jackpots.findIndex((obj) => {
          return obj.game === this.games[i].id;
        });
        if (index != -1) {
          this.games[i].amount=this.jackpots[index].amount;
          this.showedJackpotsGames.push(this.games[i]);
        }else{
          this.games[i].amount=null;
        }
      }
    }),
    error => console.log('oops', error);
  }
  filter(option:string){

    if (option=='other') {

      this.showedGames = this.games.filter(s => s.categories.includes('fun'));
      this.showedGames=this.showedGames.concat(this.games.filter(s => s.categories.includes('ball')));
      this.showedGames=this.showedGames.concat(this.games.filter(s => s.categories.includes('virtual')));
    }else if(option=='jackpots'){
      this.showedGames=this.showedJackpotsGames;
    }else{

      this.showedGames = this.games.filter(s => s.categories.includes(option));
    }
  }

  getAllGames(){

    this.gameService.findall().subscribe(games =>{
      this.games = games;
      this.getalljackpost();
       this.filter(this.active);
    });
  }
}

