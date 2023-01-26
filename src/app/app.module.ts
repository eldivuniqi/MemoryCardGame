import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { PlayerBarComponent } from './player-bar/player-bar.component';
import { SubmitDialogComponent } from './submit-dialog/submit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    PlayerBarComponent,
    SubmitDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
