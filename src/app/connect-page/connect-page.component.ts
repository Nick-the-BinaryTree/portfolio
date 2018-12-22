import { Component, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-connect-page',
  templateUrl: './connect-page.component.html',
  styleUrls: ['./connect-page.component.css']
})
export class ConnectPageComponent implements OnInit {
  orientation: Subscription;
  orientationChanged: boolean = false;
  landscape: boolean = true;

  constructor() { }

  ngOnInit() {
    this.landscape = this.checkLandscape();
    this.orientation = fromEvent(window, 'orientationchange')
      .subscribe(() => {
        this.orientationChanged = true;
        this.landscape = this.checkLandscape();
        console.log(this.landscape)
      });
  }

  checkLandscape() {
    console.log(window.innerWidth);
    return window.innerWidth > window.innerHeight;
  }

  ngOnDestroy() {
    this.orientation.unsubscribe();
  }

}
