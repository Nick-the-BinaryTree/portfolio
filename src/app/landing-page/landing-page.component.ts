import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { fromEvent, merge, Subscription } from 'rxjs';

import { GOTO_BIO_PAGE, GOTO_MUN_PAGE } from '../actions';
import { IAppState } from '../store';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  munCode: number = 0;
  userAction: Subscription;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    const keyUp$ = fromEvent(document.body, 'keyup');
    const mouseClick$ = fromEvent(document.body, 'click');

    this.userAction = merge(keyUp$, mouseClick$)
      .subscribe((e: any) => {
        if (e.key != null) {
          if (e.key === 'm' && this.munCode === 0
            || e.key === 'u' && this.munCode === 1) {
            this.munCode++;
            return;
          } else if (e.key === 'n' && this.munCode === 2) {
            this.ngRedux.dispatch({type: GOTO_MUN_PAGE});
            return;
          }
        }
        this.ngRedux.dispatch({type: GOTO_BIO_PAGE});
      });
  }

  ngOnDestroy() {
    this.userAction.unsubscribe();
  }

}
