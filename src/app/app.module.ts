import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InitialLogoComponent } from './initial-logo/initial-logo.component';
import { InputTextComponent } from './input-text/input-text.component';
import { FormsModule } from '@angular/forms';
import { InputPlayerComponent } from './input-player/input-player.component';
import { GameTableComponent } from './game-table/game-table.component';
import { HeaderComponent } from './header/header.component';
import { IconPlayerComponent } from './icon-player/icon-player.component';
import { PlayerNameComponent } from './player-name/player-name.component';
import { CardComponent } from './card/card.component';
import { IconPragmaComponent } from './icon-pragma/icon-pragma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    InitialLogoComponent,
    InputTextComponent,
    InputPlayerComponent,
    HeaderComponent,
    IconPlayerComponent,
    PlayerNameComponent,
    CardComponent,
    IconPragmaComponent,
    GameTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  ngOnInit() {}
}
