import { Injectable } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

import * as innerHeight from 'ios-inner-height';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
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

  getOrientationChanged(): boolean {
    return this.orientationChanged;
  }

  getWidth(): number {
    if (navigator.platform === 'iPad' || navigator.platform === 'iPhone'
      || navigator.platform === 'iPod') {
        return screen.width;
      }
    return window.innerWidth;
  }

  getHeight(): number {
    return innerHeight();
  }

  ngOnDestroy() {
    this.orientation.unsubscribe();
  }
}
