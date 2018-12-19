import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-name-title',
  templateUrl: './name-title.component.html',
  styleUrls: ['./name-title.component.css']
})
export class NameTitleComponent implements OnInit {
  orientationChanged: boolean = false;

  constructor() { }

  ngOnInit() {
    fromEvent(window, 'orientationchange')
      .subscribe(() => {
        this.orientationChanged = true;
      });
  }

}
