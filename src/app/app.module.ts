import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InitialLogoComponent } from './initial-logo/initial-logo.component';
import { InputTextComponent } from './input-text/input-text.component';
import { FormsModule } from '@angular/forms';
import { InputPlayerComponent } from './input-player/input-player.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialLogoComponent,
    InputTextComponent,
    InputPlayerComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  ngOnInit() {}
}
