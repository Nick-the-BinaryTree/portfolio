import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { fromEvent } from 'rxjs';

import { GOTO_BIO_PAGE, GOTO_MUN_PAGE } from '../actions';
import { IAppState } from '../store';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  munCode: number = 0;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    fromEvent(document.body, 'click')
      .subscribe(() => {
        this.ngRedux.dispatch({type: GOTO_BIO_PAGE});
    });
    fromEvent(document.body, 'keydown')
      .subscribe((x: KeyboardEvent) => {
        if (x.key === 'm' && this.munCode === 0
          || x.key === 'u' && this.munCode === 1) {
          this.munCode++;
        } else if (x.key === 'n' && this.munCode === 2) {
          this.ngRedux.dispatch({type: GOTO_MUN_PAGE});
        } else {
          this.ngRedux.dispatch({type: GOTO_BIO_PAGE});
        }
      });
  }

}
