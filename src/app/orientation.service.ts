import { Injectable } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrientationService {
  orientation: Subscription;
  orientationChanged: boolean = false;

  constructor() { 
    this.orientation = fromEvent(window, 'orientationchange')
      .subscribe(() => {
        this.orientationChanged = true;
      });
  }

  clearOrientationChanged() {
    this.orientationChanged = false;
  }

  getOrientationChanged() {
    return this.orientationChanged;
  }

  ngOnDestroy() {
    this.orientation.unsubscribe();
  }
}
