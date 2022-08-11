import { Component , Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from 'src/app/models/game.model';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  standalone: true,
  imports:[CommonModule],
})
export class GameComponent {
  @Input() showedGames: Game[];
  @Input() showedJackpotsGames: Game[];
// games : Game[]=[]
}
