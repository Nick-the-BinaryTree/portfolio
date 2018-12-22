import { Component, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-name-title',
  templateUrl: './name-title.component.html',
  styleUrls: ['./name-title.component.css']
})
export class NameTitleComponent implements OnInit {
  orientation: Subscription;
  orientationChanged: boolean = false;

  constructor() { }

  ngOnInit() {
    this.orientation = fromEvent(window, 'orientationchange')
      .subscribe(() => {
        this.orientationChanged = true;
      });
  }

  ngOnDestroy() {
    this.orientation.unsubscribe();
  }

}
