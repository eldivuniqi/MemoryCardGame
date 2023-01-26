import { Component, Inject } from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SubmitDialogComponent } from "./submit-dialog/submit-dialog.component";


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

  cardClicks: number = 0;

  constructor(private modalService: NgbModal) { }

  startGame() {
    if(this.gameEnded) {
      this.resetGame();
    }
    this.gameStarted = true;
    this.intervalId = setInterval(() => {
      this.minutes = Math.floor(this.timeElapsed / 60);
      this.seconds = this.timeElapsed % 60;
      this.timeElapsed++;
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

  openDialog() {
    const modalRef = this.modalService.open(SubmitDialogComponent);
    modalRef.result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${reason}`);
    });
  }


}




