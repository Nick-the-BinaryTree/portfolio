import { Component, OnInit } from '@angular/core';

import { WindowService } from '../window.service';

@Component({
  selector: 'app-name-title',
  templateUrl: './name-title.component.html',
  styleUrls: ['./name-title.component.css']
})
export class NameTitleComponent implements OnInit {

  constructor(private windowService: WindowService) { }

  ngOnInit() { }

  getOrientationChanged() {
    return this.windowService.getOrientationChanged();
  }

  ngOnDestroy() {
    this.windowService.clearOrientationChanged();
  }
}
