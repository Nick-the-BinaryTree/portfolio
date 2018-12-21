import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { Observable } from 'rxjs';

import { IAppState, PAGE } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @select() page: Observable<PAGE>;
  PAGE = PAGE; // so template can use enum
  title = 'Nicholas Hartunian';

  constructor(private ngRedux: NgRedux<IAppState>) { }
}
