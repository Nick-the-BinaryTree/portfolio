import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { Observable } from 'rxjs';

import { IAppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @select() page: Observable<string>;
  title = 'Nicholas Hartunian';

  constructor(private ngRedux: NgRedux<IAppState>) { }
}
