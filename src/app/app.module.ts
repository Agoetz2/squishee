import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DecklistComponent } from './decklist/decklist.component';
import { DeckDetailsComponent } from './deck-details/deck-details.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DecklistComponent, DeckDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 


}
