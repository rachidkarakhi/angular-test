import { Component , OnInit} from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { Jackpot } from 'src/app/models/jackpot.model';
import { GameService } from 'src/app/services/game.service';
import { interval} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
//   games : Game[]=[]
// showedGames : Game[]=[]
// showedJackpotsGames : Game[]=[]
// jackpots : Jackpot[]=[]
sub:any
active : string="top"
categories: string[]=['top','new','slots','jackpots','live','blackjack','roulette','table','poker','other']
  constructor(private gameService:GameService) { }
  ngOnInit(): void {
    if (sessionStorage.getItem('active')) {
      this.active=sessionStorage.getItem('active')
    }
    // this.getAllGames();
    // this.sub =  interval(10000)
    // .subscribe(() => {
    //   console.log("called");
    //   this.getalljackpost();
    // });
  }
  // getalljackpost(){
  //   this.gameService.findalljackpot().subscribe(jackpots =>{
  //     this.showedJackpotsGames=[];
  //     this.jackpots = jackpots;
  //     for (let i = 0; i < this.games.length; i++) {
  //       var index = this.jackpots.findIndex((obj) => {
  //         return obj.game === this.games[i].id;
  //       });
  //       if (index != -1) {
  //         this.games[i].amount=this.jackpots[index].amount;
  //         this.showedJackpotsGames.push(this.games[i]);
  //       }else{
  //         this.games[i].amount=null;
  //       }
  //     }
  //   });
  // }
  // getAllGames(){
  //   this.gameService.findall().subscribe(games =>{
  //     this.games = games;
  //     this.getalljackpost();
  //     this.showedGames = this.games.filter(s => s.categories.includes("top"));
  //   });


  //   // this.filter("top");
  //   console.log(this.games );
  // }
  // filter(option:string){
  //   if (option=='other') {
  //     this.showedGames = this.games.filter(s => s.categories.includes('fun'));
  //     this.showedGames=this.showedGames.concat(this.games.filter(s => s.categories.includes('ball')));
  //     this.showedGames=this.showedGames.concat(this.games.filter(s => s.categories.includes('virtual')));
  //   }else if(option=='jackpots'){
  //     this.showedGames=this.showedJackpotsGames;
  //   }else{
  //     this.showedGames = this.games.filter(s => s.categories.includes(option));
  //   }

  //   this.active=option;

  // }
  // myFunction() {
  //   var x = document.getElementById("myTopnav");
  //   if (x.className === "topnav") {
  //     x.className += " responsive";
  //   } else {
  //     x.className = "topnav";
  //   }
  // }
  title = 'angular-test';
}
