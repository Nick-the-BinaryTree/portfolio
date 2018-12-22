import { Component, OnInit } from '@angular/core';

import { OrientationService } from '../orientation.service';

@Component({
  selector: 'app-name-title',
  templateUrl: './name-title.component.html',
  styleUrls: ['./name-title.component.css']
})
export class NameTitleComponent implements OnInit {

  constructor(private orientationService: OrientationService) { }

  ngOnInit() { }

  getOrientationChanged() {
    return this.orientationService.getOrientationChanged();
  }

  ngOnDestroy() {
    this.orientationService.clearOrientationChanged();
  }
}
