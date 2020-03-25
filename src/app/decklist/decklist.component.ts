import { Component, OnInit } from '@angular/core';
import { Deck } from '../decks';
import { DECKS } from '../fakeDecks';

@Component({
  selector: 'app-decklist',
  templateUrl: './decklist.component.html',
  styleUrls: ['./decklist.component.css']
})
export class DecklistComponent implements OnInit {
  
  decks = DECKS;

  constructor() { }

  ngOnInit() {
  }

}