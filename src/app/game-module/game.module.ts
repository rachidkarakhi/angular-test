import { NgModule } from "@angular/core";
import { GameListComponent } from "./game-list/game-list.component";
import { GameComponent } from "./game.component";


@NgModule({
  declarations: [
  GameListComponent,
  GameComponent
  ],
  imports: [

  ],
  exports:[GameComponent],
})
export class GameModule { }
