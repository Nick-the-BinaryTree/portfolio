import { Component, OnInit } from '@angular/core';

import { WindowService } from '../window.service';

@Component({
  selector: 'app-connect-page',
  templateUrl: './connect-page.component.html',
  styleUrls: ['./connect-page.component.css']
})
export class ConnectPageComponent implements OnInit {
  
  constructor(private windowService: WindowService) { }

  ngOnInit() { }

  getOrientationChanged() {
    return this.windowService.getOrientationChanged();
  }
}
