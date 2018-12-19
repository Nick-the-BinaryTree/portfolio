import { Injectable } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';

import { Observable } from 'rxjs';

import { IAppState } from './store';

import { randomStartPos, randomStartVelocityDir,
  runBoundaryCheck } from './game-bg/game.util';

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

const maxRadius = 20;
const maxVelocity = 80;
const minRadius = 5;
const minVelocity = 20;
const midRadius = (maxRadius + minRadius)/2;

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  @select() page: Observable<string>;
  pageString: string;

  constructor(private ngRedux: NgRedux<IAppState>) {
    // apparently, this doesn't work in the Angular init methods
    this.page.subscribe((x: string) => {this.pageString = x});
   }

  getInitObjs(boundaries: boundariesType): Array<any> {
    if (this.pageString === 'landing') {
      return [{
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
    }
    return [];
  }

  getRender(ctx: CanvasRenderingContext2D, state: gameStateObj) {
    if (this.pageString === 'landing') {
      state['objects'].forEach((obj: canvasObj) => {
        ctx.fillStyle = obj.color;
        ctx.beginPath();
        ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();
      });
    }
  }

  getUpdate(boundaries: boundariesType, 
    deltaTime: number, state: gameStateObj): gameStateObj {
    if(state['objects'] == null) {
      state['objects'] = this.getInitObjs(boundaries);
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
