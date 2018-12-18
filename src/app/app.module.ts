import { BrowserModule } from '@angular/platform-browser';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { NgModule } from '@angular/core';

import { IAppState, rootReducer, INITIAL_STATE } from './store';

import { AppComponent } from './app.component';
import { GameBgComponent } from './game-bg/game-bg.component';
import { NameTitleComponent } from './name-title/name-title.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BioPageComponent } from './bio-page/bio-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBgComponent,
    NameTitleComponent,
    LandingPageComponent,
    BioPageComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
