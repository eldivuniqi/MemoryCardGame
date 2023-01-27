import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';


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
  progress =0;
  // matchedCards: any[]=[];
  

  @Output() cardsClicked = new EventEmitter<number>();
  @Output() inceaseTheProgress = new EventEmitter<any>();

  @Input() gameStarted: boolean = false;

  cards = [
    { id: 1, image: '../../assets/pic1.jpg', flipped: false, },
    { id: 2, image: '../../assets/pic2.jpg', flipped: false,  },
    { id: 3, image: '../../assets/pic3.jpg', flipped: false,},
    { id: 4, image: '../../assets/pic1.jpg', flipped: false },
    { id: 5, image: '../../assets/pic2.jpg', flipped: false,  },
    { id: 6, image: '../../assets/pic3.jpg', flipped: false },
  ];
  flippedCards: any[] = [];

  ngOnInit() {
    this.cards.sort(() => Math.random() - 0.5);
 }
 
 constructor(private dataService: DataService) {}

flip(card: any) {
  if (!card.flipped && this.flippedCards.length < 2) {
    this.flippedCards.push(card);
    card.flipped = true;
    if (this.flippedCards.length === 2) {
      if (this.flippedCards[0].image === this.flippedCards[1].image) {
        this.flippedCards[0].flipped = true;
        this.flippedCards[1].flipped = true;
        this.flippedCards = [];
        this.count++;
        // this.increaseProgress();
        this.dataService.count++;
        this.dataService.increaseProgress();
      } else {
        setTimeout(() => {
          this.flippedCards[0].flipped = false;
          this.flippedCards[1].flipped = false;
          this.flippedCards = [];
        }, 1000);
      }
    }
    if (this.dataService.count === 3) {
      alert('You won the game');
    }
  }
}

   onClick(card: any) {
     console.log("onclick")
     this.flip(card); 
     if(this.gameStarted) {
      this.cardsClicked.emit()
     }
  }
 }
