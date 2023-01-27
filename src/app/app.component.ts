import { Component, Inject } from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  timeElapsed = 0;
  gameNumber = 1;
  intervalId: any;
  gameStarted = false;
  gameEnded = false;
  minutes = 0;
  seconds =0;
  clicks: number=0;
  isGameStarted: boolean = false;
  formattedTime: string = "00:00";

  cardClicks: number = 0;

  constructor(private modalService: NgbModal) { }

  startGame() {
    this.isGameStarted = true;
    if(this.gameEnded) {
      this.resetGame();
    }
    ++this.cardClicks;
    this.gameStarted = true;
    this.intervalId = setInterval(() => {
      this.minutes = Math.floor(this.timeElapsed / 60);
      this.seconds = this.timeElapsed % 60;
      this.timeElapsed++;
      this.formattedTime = `${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`;
    }, 1000); 
    }

  stopTimer() {
    clearInterval(this.intervalId);
    this.gameEnded = true;
  }

  cardClicked() {
    ++this.cardClicks;
  }

  resetGame() {
    clearInterval(this.intervalId);
    this.timeElapsed = 0;
    this.gameNumber++;
    this.gameStarted = false;
    this.gameEnded = false;
  }

}




