import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InitialLogoComponent } from './components/initial-logo/initial-logo.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { FormsModule } from '@angular/forms';
import { InputPlayerComponent } from './components/input-player/input-player.component';
import { GameTableComponent } from './components/game-table/game-table.component';
import { HeaderComponent } from './components/header/header.component';
import { IconPlayerComponent } from './components/icon-player/icon-player.component';
import { PlayerNameComponent } from './components/player-name/player-name.component';
import { CardComponent } from './components/card/card.component';
import { IconPragmaComponent } from './components/icon-pragma/icon-pragma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { ContainerTripleComponent } from './components/container-triple/container-triple.component';

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
    ContainerTripleComponent,
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
