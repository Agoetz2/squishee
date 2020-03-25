import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DecklistComponent } from './decklist/decklist.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DecklistComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 


}
