import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { of, BehaviorSubject, Observable } from 'rxjs';
import { expand, filter, map, share, tap, withLatestFrom } from 'rxjs/operators';

import { IFrameData } from './frame.interface';
import { clampTo30FPS, randomStartPos, randomStartVelocityDir, runBoundaryCheck } from './game.util';

export type boundaries = {top: number, right: number, bottom: number, left: number};
export type objVelocity = {
  dx: number,
  dy: number
};
type canvasObj = {
  x: number,
  y: number,
  radius: number,
  velocity: objVelocity,
  color: string
} | null;
type gameStateObj = {objects?: Array<canvasObj>};

const maxRadius = 20;
const maxVelocity = 80;
const minRadius = 5;
const minVelocity = 20;

const midRadius = (maxRadius + minRadius)/2;

const boundaries = {
  left: 0,
  top: 0,
  bottom: window.innerHeight,
  right: window.innerWidth
};

const initObjs = [{
  ...randomStartPos(boundaries, maxRadius),
  radius: maxRadius,
  velocity: randomStartVelocityDir(minVelocity),
  color: 'rgb(83,109,254,0.1)'
},
{
  ...randomStartPos(boundaries, midRadius),
  radius: midRadius,
  velocity: randomStartVelocityDir((maxVelocity + minVelocity)/2),
  color: 'rgb(105,240,174,0.1)'
},
{
  ...randomStartPos(boundaries, minRadius),
  radius: minRadius,
  velocity: randomStartVelocityDir(maxVelocity),
  color: 'rgb(255,82,82,0.1)'
}];

@Component({
  selector: 'app-game-bg',
  templateUrl: './game-bg.component.html',
  styleUrls: ['./game-bg.component.css']
})
export class GameBgComponent implements AfterViewInit {
  @ViewChild('gameArea') gameArea: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    // canvas setup
    this.gameArea.nativeElement.width = boundaries.right;
    this.gameArea.nativeElement.height = boundaries.bottom;

    // TODO: convert to stream
    window.addEventListener('resize', () => {
      this.gameArea.nativeElement.height = boundaries.bottom = window.innerHeight;
      this.gameArea.nativeElement.width = boundaries.right = window.innerWidth;
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

    // ctx.clearRect(0, 0, this.gameArea.nativeElement.clientWidth,
    //    this.gameArea.nativeElement.clientHeight);

    state['objects'].forEach((obj: canvasObj) => {
      ctx.fillStyle = obj.color;
      ctx.beginPath();
      ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI*2);
      ctx.fill();
      ctx.closePath();
    });
  };

  update(deltaTime: number, state: gameStateObj): any {
    if(state['objects'] == null) {
      state['objects'] = initObjs;
    } else {
      state['objects'].forEach((obj: canvasObj) => {
        const hitBoundary = runBoundaryCheck(obj, boundaries);
  
        if (hitBoundary != null) {
          if (hitBoundary === 'right' || hitBoundary === 'left') {
            obj.velocity.dx *= -1;
          } else {
            obj.velocity.dy *= -1;
          }
        }
        obj.x = obj.x += obj.velocity.dx*deltaTime;
        obj.y = obj.y += obj.velocity.dy*deltaTime;
      });
    }
  
    return state;
  };
}
