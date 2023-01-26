import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  flipped = false;
  clicks =0;
  count =0;
  cardClicks = 0;

  @Output() cardsClicked = new EventEmitter<number>();

  cards = [
    { id: 1, image: 'image1.jpg', flipped: false, isTheSame: true },
    { id: 2, image: 'image2.jpg', flipped: false },
    { id: 3, image: 'image3.jpg', flipped: false },
    { id: 4, image: 'image4.jpg', flipped: false, isTheSame: true },
    { id: 5, image: 'image5.jpg', flipped: false },
    { id: 6, image: 'image6.jpg', flipped: false },
  ];
  flippedCards: any[] = [];

  flip(card: any) {
    if (this.flippedCards.length >= 2) {
      this.flippedCards.forEach(c => c.flipped = false);
      this.flippedCards = [];
    }
    if (this.flippedCards.length < 2) {
      this.flippedCards.push(card);
      card.flipped = true;
      if (this.flippedCards.length === 2) {
        if (this.flippedCards[0].isTheSame === this.flippedCards[1].isTheSame) {
          alert('Congratulations!');
          return;
        }
      }
    }
}

 cardClicked() {
    this.cardClicks++;
}

  onClick(card: any) {
    console.log("onclick")
    this.flip(card); 
    this.cardsClicked.emit()
  }
}
