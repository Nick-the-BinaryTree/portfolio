import { Injectable, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';

import { fromEvent, merge, Observable, Subscription } from 'rxjs';

import { GOTO_BIO_PAGE, GOTO_CONNECT_PAGE, GOTO_MUN_PAGE } from './actions';
import { IAppState, PAGE } from './store';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  @select() page$: Observable<string>;
  munCode: number = 0;
  pageChange: Subscription;
  pageString: PAGE;
  userAction: Subscription;

  constructor(private ngRedux: NgRedux<IAppState>) {
        this.pageChange = this.page$.subscribe((x: PAGE) => {this.pageString = x});
        
        const keyUp$ = fromEvent(document.body, 'keyup');
        const mouseClick$ = fromEvent(document.body, 'click');
        const touch$ = fromEvent(document.body, 'touchstart');

        this.userAction = merge(keyUp$, mouseClick$, touch$)
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
            } else if (this.pageString === PAGE.LANDING) {
              this.ngRedux.dispatch({type: GOTO_BIO_PAGE});
            } else {
              this.ngRedux.dispatch({type: GOTO_CONNECT_PAGE});
            }
          });
  }

  ngOnDestroy() {
    this.pageChange.unsubscribe();
    this.userAction.unsubscribe();
  }
}