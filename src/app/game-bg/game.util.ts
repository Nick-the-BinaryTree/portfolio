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

export const runBoundaryCheck = (obj: any, 
    boundaries: {top: number, right: number, bottom: number, left: number}
    ): string => {
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