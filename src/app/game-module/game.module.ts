import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { GameItemComponent } from "./game-list/game-item/game-item.component";
import { GameListComponent } from "./game-list/game-list.component";
import { GameRoutingModule } from "./game-routing.module";
@NgModule({
  declarations: [
  GameListComponent,
  GameItemComponent
  ],
  imports: [
    GameRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  exports:[],
})
export class GameModule { }
