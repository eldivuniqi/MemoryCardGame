import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  progress = 0;
  count = 0;
  private progressSubject = new Subject<number>();
  progress$ = this.progressSubject.asObservable();

  taskComplete(){
    console.log("Task Complete!")
  }
  increaseProgress() {
    this.progress += 33.3;
    this.progressSubject.next(this.progress);
}
}