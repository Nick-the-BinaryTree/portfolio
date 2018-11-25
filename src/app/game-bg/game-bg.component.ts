import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { of, BehaviorSubject, Observable } from 'rxjs';
import { bufferCount, expand, filter, map, share, tap, withLatestFrom } from 'rxjs/operators';

import { IFrameData } from './frame.interface';
import { clampMag, clampTo30FPS, runBoundaryCheck } from './game.util';

const boundaries = {
  left: 0,
  top: 0,
  bottom: 300,
  right: 400
};
const baseObjectVelocity = {
  x: 30,
  y: 40,
  maxX: 250,
  maxY: 200
};
const bounceRateChanges = {
  left: 1.1,
  top: 1.2,
  bottom: 1.3,
  right: 1.4
};

const calculateStep: (prevFrame: IFrameData) => Observable<IFrameData> =
  (prevFrame: IFrameData) => Observable.create(observer => {
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

// TODO: better types
const update = (deltaTime: number, state: any): any => {
  if(state['objects'] == null) {
    state['objects'] = [
      {
        // Transformation Props
        x: 10, y:10, width: 20, height: 30,
        // Movement Props
        velocity: baseObjectVelocity
      },
      {
        // Transformation Props
        x: 200, y: 249, width: 50, height: 20,
        // Movement Props
        velocity: {x: -baseObjectVelocity.x, y: 2*baseObjectVelocity.y}
      }
    ];
  } else {
    state['objects'].forEach(obj => {
      obj.x = obj.x += obj.velocity.x*deltaTime;
      obj.y = obj.y += obj.velocity.y*deltaTime;

      const hitBoundary = runBoundaryCheck(obj, boundaries);

      if (hitBoundary) {
        if (hitBoundary === 'right' || hitBoundary === 'left') {
          obj.velocity.x *= -bounceRateChanges[hitBoundary];
        } else {
          obj.velocity.y *= -bounceRateChanges[hitBoundary];
        }
      }

      obj.velocity.x = clampMag(obj.velocity.x, 0, baseObjectVelocity.maxX);
      obj.velocity.y = clampMag(obj.velocity.y, 0, baseObjectVelocity.maxY);
    });
  }

  return state;
};

const frames$ = of(undefined)
  .pipe(
    // emits value of calculateStep
    expand(val => calculateStep(val)),
    filter(frame => frame !== undefined),
    map((frame: IFrameData) => frame.deltaTime),
    share()
  );

const gameState$ = new BehaviorSubject({});

@Component({
  selector: 'app-game-bg',
  templateUrl: './game-bg.component.html',
  styleUrls: ['./game-bg.component.css']
})
export class GameBgComponent implements AfterViewInit {
  @ViewChild('gameArea') gameArea;
  @ViewChild('fps') fps;

  constructor() { }

  ngAfterViewInit() {
    // run game
    frames$.pipe(
      withLatestFrom(gameState$),
      map(([deltaTime, gameState]) => update(deltaTime, gameState)),
      tap(gameState => gameState$.next(gameState))
    ).subscribe(gameState => {
      this.render(gameState);
    });

    frames$.pipe(
      bufferCount(10),
      map(frames => {
        const total = frames.reduce((acc, curr) => acc + curr, 0);

        return 1/(total/frames.length);
      })
    ).subscribe(avg => {
      this.fps.innerHTML = ''+Math.round(avg);
    });
  }

// TODO: better types
render(state: any) {
  const ctx: CanvasRenderingContext2D 
    = (<HTMLCanvasElement>this.gameArea.nativeElement).getContext('2d');

  ctx.clearRect(0, 0, this.gameArea.clientWidth, this.gameArea.clientHeight);

  state['objects'].forEach(obj => {
    ctx.fillStyle = obj.color;
    ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
  });
};
}
