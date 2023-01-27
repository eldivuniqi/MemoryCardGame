import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-player-bar',
  templateUrl: './player-bar.component.html',
  styleUrls: ['./player-bar.component.css']
})
export class PlayerBarComponent {
   progress = 0;

  constructor(public dataService: DataService) {}
  ngOnInit() {
    this.dataService.progress$.subscribe(progress => {
      this.progress = progress;
    });
}
  player = {
    name: 'Filan Fisteku'
};
}

