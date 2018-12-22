import { Injectable } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';

import { Observable, Subscription } from 'rxjs';

import { IAppState, PAGE } from './store';

import { decreaseOffset, randomOffset, randomStartPos,
  randomStartVelocityDir, runBoundaryCheck, trailObjGen } from './game-bg/game.util';

export type boundariesType = {top: number, right: number, bottom: number, left: number};
export type objVelocity = {
  dx: number,
  dy: number,
};
export type canvasObj = {
  color: string
  x: number,
  y: number,
  offsetX?: number,
  offsetY?: number
  radius: number,
  velocity: objVelocity,
} | null;
export type gameStateObj = {objects?: Array<canvasObj>};
export type mousePosType = { x: number, y: number };

const BLUE = 'rgb(83,109,254,0.1)';
const GREEN = 'rgb(105,240,174,0.1)';
const RED = 'rgb(255,82,82,0.1)';

const MAX_RADIUS = 20;
const MIN_RADIUS = 10;
const MID_RADIUS = (MAX_RADIUS + MIN_RADIUS)/2;

const MAX_VELOCITY = 80;
const MIN_VELOCITY = 40;
const MID_VELOCITY = (MAX_VELOCITY + MIN_VELOCITY)/2;

const BURST_OFFSET = 140;
const FOLLOW_SPEED_DRAG = 0.02;
const NUM_TRAIL_OBJS = 3;
const WITHER = 120;

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  @select() page$: Observable<string>;
  pageChange: Subscription;
  pageString: PAGE;

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.pageChange = this.page$.subscribe((x: PAGE) => {this.pageString = x});
   }

  getBgColor(): string {
    switch (this.pageString) {
      case PAGE.CONNECT:
        return '#000';
      case PAGE.LANDING:
        return '#1c2328';
    }
  }

  getCustomInit(ctx: CanvasRenderingContext2D) {
    switch (this.pageString) {
      case PAGE.CONNECT:
        ctx.globalCompositeOperation = 'destination-out';
        break;
      case PAGE.LANDING:
        ctx.globalCompositeOperation = 'source-over';
        break;
    }
  }

  getInitObjs(boundaries: boundariesType): Array<any> {
    switch(this.pageString) {
      case PAGE.CONNECT:
        return trailObjGen(NUM_TRAIL_OBJS, BURST_OFFSET, boundaries,
          MIN_RADIUS, MID_VELOCITY, BLUE, GREEN, RED);
      case PAGE.LANDING:
        return [{
          ...randomStartPos(boundaries, MAX_RADIUS),
          radius: MAX_RADIUS,
          velocity: randomStartVelocityDir(MIN_VELOCITY),
          color: BLUE
        },
        {
          ...randomStartPos(boundaries, MID_RADIUS),
          radius: MID_RADIUS,
          velocity: randomStartVelocityDir(MID_VELOCITY),
          color: GREEN
        },
        {
          ...randomStartPos(boundaries, MIN_RADIUS),
          radius: MIN_RADIUS,
          velocity: randomStartVelocityDir(MAX_VELOCITY),
          color: RED
        }];
    }
  }

  getRender(ctx: CanvasRenderingContext2D, state: gameStateObj) {
    ctx.fillStyle = 'rgba(0,0,0,0.005)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    state['objects'].forEach((obj: canvasObj) => {
      ctx.fillStyle = obj.color;
      ctx.beginPath();
      ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI*2);
      ctx.fill();
      ctx.restore();
      ctx.closePath();
    });
  }

  getUpdate(boundaries: boundariesType, deltaTime: number,
    mouseClicked: boolean, mousePos: mousePosType, state: gameStateObj): gameStateObj {
    if(state['objects'] == null) {
      state['objects'] = this.getInitObjs(boundaries);
    }
    switch(this.pageString) {
      case PAGE.CONNECT:
        state['objects'].forEach((obj: canvasObj) => {
          const xDist = mousePos.x - obj.x;
          const yDist = mousePos.y - obj.y;

          if (mouseClicked) {
            obj.offsetX = randomOffset(BURST_OFFSET);
            obj.offsetY = randomOffset(BURST_OFFSET);
          }
          obj.x += deltaTime * (xDist * FOLLOW_SPEED_DRAG * Math.abs(obj.velocity.dx)
            + obj.offsetX);
          obj.y += deltaTime * (yDist * FOLLOW_SPEED_DRAG * Math.abs(obj.velocity.dy)
            + obj.offsetY);
          obj = decreaseOffset(deltaTime, obj, WITHER);
        });
        return state;
      case PAGE.LANDING:
        state['objects'].forEach((obj: canvasObj) => {
          const hitBoundary = runBoundaryCheck(obj, boundaries);
    
          if (hitBoundary != null) {
            if (hitBoundary === 'right' || hitBoundary === 'left') {
              obj.velocity.dx *= -1;
            } else {
              obj.velocity.dy *= -1;
            }
          }
          obj.x += obj.velocity.dx*deltaTime;
          obj.y += obj.velocity.dy*deltaTime;
        });
        return state;
    }
  }

  ngOnDestroy() {
    this.pageChange.unsubscribe();
  }
}
