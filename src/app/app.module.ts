import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameBgComponent } from './game-bg/game-bg.component';
import { NameTitleComponent } from './name-title/name-title.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBgComponent,
    NameTitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
