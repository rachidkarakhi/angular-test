import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { GameItemComponent } from './components/game-item/game-item.component';
import { GameModule } from './game-module/game.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GameItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
