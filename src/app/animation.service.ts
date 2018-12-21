import { Injectable } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';

import { Observable, fromEvent } from 'rxjs';

import { IAppState, PAGE } from './store';

import { randomStartPos, randomStartVelocityDir,
  runBoundaryCheck, trailObjGen } from './game-bg/game.util';

export type boundariesType = {top: number, right: number, bottom: number, left: number};
export type objVelocity = {
  dx: number,
  dy: number
};
export type canvasObj = {
  x: number,
  y: number,
  radius: number,
  velocity: objVelocity,
  color: string
} | null;
export type gameStateObj = {objects?: Array<canvasObj>};

const BLUE = 'rgb(83,109,254,0.1)';
const GREEN = 'rgb(105,240,174,0.1)';
const RED = 'rgb(255,82,82,0.1)';

const MAX_RADIUS = 20;
const MIN_RADIUS = 5;
const MID_RADIUS = (MAX_RADIUS + MIN_RADIUS)/2;

const MAX_VELOCITY = 80;
const MIN_VELOCITY = 20;
const MID_VELOCITY = (MAX_VELOCITY + MIN_VELOCITY)/2;

const NUM_TRAIL_OBJS = 3;

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  @select() page: Observable<string>;
  mousePos: { x: number, y: number };
  pageString: PAGE;

  constructor(private ngRedux: NgRedux<IAppState>) {
    // apparently, this doesn't work in the Angular init methods
    this.page.subscribe((x: PAGE) => {this.pageString = x});
   }

  getBgColor(): string {
    switch (this.pageString) {
      case PAGE.CONNECT:
        return "#000";
      case PAGE.LANDING:
        return "#37464f";
    }
  }

  getCustomInit() {
    switch (this.pageString) {
      case PAGE.CONNECT:
        fromEvent(window, 'mousemove')
          .subscribe((e: MouseEvent) => {
            this.mousePos = { x: e.clientX, y: e.clientY };
          });
      case PAGE.LANDING:
          return;
    }
  }

  getInitObjs(boundaries: boundariesType): Array<any> {
    switch(this.pageString) {
      case PAGE.CONNECT:
        return trailObjGen(NUM_TRAIL_OBJS, boundaries, MIN_RADIUS,
          MID_VELOCITY, BLUE, GREEN, RED);
      case PAGE.LANDING:
        return [{
          ...randomStartPos(boundaries, MAX_RADIUS),
          radius: MIN_RADIUS,
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
    let trail: boolean;

    switch(this.pageString) {
      case PAGE.CONNECT:
        trail = false;
      case PAGE.LANDING:
        trail = true;
    }

    if (!trail) {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

    state['objects'].forEach((obj: canvasObj) => {
      ctx.fillStyle = obj.color;
      ctx.beginPath();
      ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI*2);
      ctx.fill();
      ctx.closePath();
    });
  }

  getUpdate(boundaries: boundariesType, 
    deltaTime: number, state: gameStateObj): gameStateObj {
    if(state['objects'] == null) {
      state['objects'] = this.getInitObjs(boundaries);
    }
    switch(this.pageString) {
      case PAGE.CONNECT:
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
          obj.x = obj.x += obj.velocity.dx*deltaTime;
          obj.y = obj.y += obj.velocity.dy*deltaTime;
        });
        return state;
    }
  }
}
