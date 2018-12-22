import { Component, OnInit } from '@angular/core';

import { OrientationService } from '../orientation.service';

@Component({
  selector: 'app-connect-page',
  templateUrl: './connect-page.component.html',
  styleUrls: ['./connect-page.component.css']
})
export class ConnectPageComponent implements OnInit {
  
  constructor(private orientationService: OrientationService) { }

  ngOnInit() { }

  getOrientationChanged() {
    return this.orientationService.getOrientationChanged();
  }
}
