import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { GameListComponent } from './game-list/game-list.component';
import { GameComponent } from './game.component';

const routes: Routes = [
  {
    path:'',
    component: GameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
