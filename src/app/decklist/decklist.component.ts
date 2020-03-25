import { Component, OnInit } from '@angular/core';
import { Deck } from '../decks';

@Component({
  selector: 'app-decklist',
  templateUrl: './decklist.component.html',
  styleUrls: ['./decklist.component.css']
})
export class DecklistComponent implements OnInit {
  
  deck: Deck = {
    name: 'White Weenies',
    numCards: 100,
    color: 'white',
    deckType: 'commander',
    sideboard: false
  }

  constructor() { }

  ngOnInit() {
  }

}