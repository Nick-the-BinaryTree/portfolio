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

// TODO: make GameObject interface
export const runBoundaryCheck = (obj: any, 
    boundaries: {top: number, right: number, bottom: number, left: number}
    ): string => {
    let boundaryHit = '';

    if (obj.x + obj.width > boundaries.right) {
        boundaryHit = 'right';
        obj.x = boundaries.right - obj.width;
    } else if (obj.x < boundaries.left) {
        boundaryHit = 'left';
        obj.x = boundaries.left;
    }
    if (obj.y + obj.height >= boundaries.bottom) {
        boundaryHit = 'bottom';
        obj.y = boundaries.bottom - obj.height;
    } else if (obj.y < boundaries.top) {
        boundaryHit = 'top';
        obj.y = boundaries.top;
    }
    return boundaryHit;
}