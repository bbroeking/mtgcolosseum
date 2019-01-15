import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { CardObject } from '../models/card.model'

@Component({
  selector: 'app-deckbuilder',
  templateUrl: './deckbuilder.component.html',
  styleUrls: ['./deckbuilder.component.css']
})
export class DeckbuilderComponent implements OnInit {

  text: string;
  results: Object;
  decklist: Array<CardObject>;

  constructor(private cardService: CardsService) { }

  ngOnInit() {
    this.decklist = [];
  }

  search(event){
    this.cardService.getCardByName(event.query).subscribe(data => {
      this.results = data;
    });
  }

  addToDecklist(card: CardObject){
    if(this.maxNumber(card)){
      this.decklist.push(
        new CardObject(card.name, card.cmc, card.set, card.collector_number, card.rarity, card.image_uris)
      );
    }
    this.sortDecklist();
  }

  sortDecklist(){
    this.decklist.sort(function(a, b){
      if(a.name < b.name){ return -1; }
      if(a.name > b.name){ return 1; }
      return 0;
    });
  }

  maxNumber(cardname: CardObject){
    var cardCount = 0;
    var deckCount = 0;
    for (let card of this.decklist){
      if(card.name == cardname.name){ cardCount++; }
      deckCount++;
    }
    if(cardCount >= 4 || deckCount > 60){ return false; }
    else{ return true; }
  }

  generateDecklist(){
    console.log(this.decklist);
  }
  // removeFromDecklist(ojbectID){
  //   // uses the object id to locate the version of the card you want to remove from the decklist

  // }

  // // This will create an object and copy it to the clipboard to be able to 
  // // copy it to MTG Arena
  // exportToArena(){

  // }

}
