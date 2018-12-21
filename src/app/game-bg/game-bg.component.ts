import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { fromEvent, of, BehaviorSubject, Observable } from 'rxjs';
import { expand, filter, map, share, tap, withLatestFrom } from 'rxjs/operators';

import { AnimationService } from '../animation.service';

import { IFrameData } from './frame.interface';
import { clampTo30FPS } from './game.util';

import { boundariesType, gameStateObj } from '../animation.service';

@Component({
  selector: 'app-game-bg',
  templateUrl: './game-bg.component.html',
  styleUrls: ['./game-bg.component.css']
})
export class GameBgComponent implements AfterViewInit {
  @ViewChild('gameArea') gameArea: ElementRef;
  bgColor: string;
  boundaries: boundariesType = {
    left: 0,
    top: 0,
    bottom: window.innerHeight,
    right: window.innerWidth
  };

  constructor(private animationService: AnimationService) { }

  ngOnInit() {
    // triggered before DOM updates
    this.bgColor = this.animationService.getBgColor();
  }

  ngAfterViewInit() {
    // this does not appear to work with template directives
    this.gameArea.nativeElement.width = this.boundaries.right = window.innerWidth;
    this.gameArea.nativeElement.height = this.boundaries.bottom = window.innerHeight;

    fromEvent(window, 'resize').subscribe(() => {
      this.gameArea.nativeElement.width = this.boundaries.right = window.innerWidth;
      this.gameArea.nativeElement.height = this.boundaries.bottom = window.innerHeight;
    });

    // run game
    this.frames$.pipe(
      withLatestFrom(this.gameState$),
      map(([deltaTime, gameState]) => this.update(deltaTime, gameState)),
      tap(gameState => this.gameState$.next(gameState))
    ).subscribe(gameState => {
      this.render(gameState);
    });
  }

  calculateStep(prevFrame: IFrameData): Observable<IFrameData> {
    return Observable.create(observer => {
      requestAnimationFrame(frameStartTime => {
        const deltaTime = prevFrame 
          ? (frameStartTime - prevFrame.frameStartTime) / 1000
          : 0;
        
        observer.next({
          frameStartTime,
          deltaTime
        });
      });
    })
    .pipe(
      map(clampTo30FPS)
    );
  }

  frames$ = of(undefined)
    .pipe(
      // emits value of calculateStep
      expand(val => this.calculateStep(val)),
      filter(frame => frame !== undefined),
      map((frame: IFrameData) => frame.deltaTime),
      share()
    );

  gameState$ = new BehaviorSubject({});

  render(state: gameStateObj) {
    const ctx: CanvasRenderingContext2D 
      = (<HTMLCanvasElement>this.gameArea.nativeElement).getContext('2d');

    this.animationService.getRender(ctx, state);
  };

  update(deltaTime: number, state: gameStateObj): gameStateObj {
    return this.animationService.getUpdate(this.boundaries, deltaTime, state);
  }
}
