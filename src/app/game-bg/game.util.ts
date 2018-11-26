import { boundaries, objVelocity } from './game-bg.component';
import { IFrameData } from './frame.interface';

export const clampMag = (value: number, min: number, max:number) => {
    let val = Math.abs(value);
    let sign = value < 0 ? -1 : 1;

    if (min <= val && val <= max) {
        return value;
    }
    return sign*min;
}

// prevents frames jumping ahead too far
export const clampTo30FPS = (frame: IFrameData) => {
    if (frame.deltaTime > (1/30)) {
        frame.deltaTime = 1/30;
    }
    return frame;
}

export const randomStartPos = (boundaries: boundaries, 
    min: number): {x: number, y: number} => ({
        x: Math.random()*(boundaries.right-min)+min,
        y: Math.random()*(boundaries.bottom-min)+min
    });

export const randomStartVal = (baseVal, min): number => Math.random()*(baseVal-min)+min;

export const randomStartVelocity = (baseVal, min): objVelocity => 
    ({dx: randomStartVelocityVal(baseVal, min), dy: randomStartVelocityVal(baseVal, min)});

export const randomStartVelocityVal = (baseVal, min): number => (Math.random() < 0.5 ? -1 : 1)
    *randomStartVal(baseVal, min);

export const runBoundaryCheck = (obj: any, boundaries: boundaries): string => {
    let boundaryHit = null;

    if (obj.x + obj.radius > boundaries.right) {
        boundaryHit = 'right';
    } else if (obj.x - obj.radius < boundaries.left) {
        boundaryHit = 'left';
    } else if (obj.y + obj.radius > boundaries.bottom) {
        boundaryHit = 'bottom';
    } else if (obj.y - obj.radius < boundaries.top) {
        boundaryHit = 'top';
    }
    return boundaryHit;
}