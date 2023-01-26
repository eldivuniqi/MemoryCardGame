import { Component } from '@angular/core';

@Component({
  selector: 'app-player-bar',
  templateUrl: './player-bar.component.html',
  styleUrls: ['./player-bar.component.css']
})
export class PlayerBarComponent {
  player = {
    name: 'John Doe',
    image: 'assets/images/player.png'
};
}
