import { Injectable } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

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
    return window.innerWidth ? window.innerWidth 
      : document.documentElement.clientWidth;
  }

  getHeight(): number {
    return window.innerHeight ? window.innerHeight
     : document.documentElement.clientHeight;
  }

  ngOnDestroy() {
    this.orientation.unsubscribe();
  }
}
