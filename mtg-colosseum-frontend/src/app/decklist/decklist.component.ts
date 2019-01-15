import { Component, OnInit, Input } from '@angular/core';
import { CardObject } from '../models/card.model'


@Component({
  selector: 'app-decklist',
  templateUrl: './decklist.component.html',
  styleUrls: ['./decklist.component.css']
})
export class DecklistComponent implements OnInit {

  @Input() decklist: Array<CardObject>;
  displayDecklist: boolean;
  deckArray: Array<String>;
  deckString: String;
  test: String ="test";

  constructor() { }

  ngOnInit() {
    this.test = "test";
    this.deckArray = [];
    this.deckString = "";
    this.displayDecklist = false;
  }

  removeCard(cardObj: CardObject){
    for (var cardNo=0; cardNo < this.decklist.length; cardNo++){
      if(this.decklist[cardNo].name == cardObj.name){ this.decklist.splice(cardNo, 1); }
    }
  }

  generateDecklist(){
    this.decklist.forEach(function(card){
      var parts = [];
      parts.push(
        "1 ",
        card.name,
        " (",
        card.set.toUpperCase(),
        ") ",
        card.collector_number,
        "\n"
      );
      var temp = parts.join("");
      this.deckArray.push(temp);
    });
    // this.deckString = this.deckArray.join("")
    // console.log(this.deckString);
    this.displayDecklist = true;
  }

}
