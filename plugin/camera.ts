// cordova-plugin-camera
import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

import { Cordova, ZoneObservable } from '../';

export class CameraDestinationType {
    public static get DATA_URL(): number { return 0; }
    public static get FILE_URI(): number { return 1; }
    public static get NATIVE_URI(): number { return 2; }
}
export class CameraEncodingType {
    public static get JPEG(): number { return 0; }
    public static get PNG(): number { return 1; }
}
export class CameraMediaType {
    public static get PICTURE(): number { return 0; }
    public static get VIDEO(): number { return 1; }
    public static get ALLMEDIA(): number { return 2; }
}
export class CameraPictureSourceType {
    public static get PHOTOLIBRARY(): number { return 0; }
    public static get CAMERA(): number { return 1; }
    public static get SAVEDPHOTOALBUM(): number { return 2; }
}
export class CameraPopoverArrowDirection {
    public static get ARROW_UP(): number { return 1; }
    public static get ARROW_DOWN(): number { return 2; }
    public static get ARROW_LEFT(): number { return 4; }
    public static get ARROW_RIGHT(): number { return 8; }
    public static get ARROW_ANY(): number { return 15; }
}
export class CameraCameraDirection {
    public static get BACK(): number { return 0; }
    public static get FRONT(): number { return 1; }
}

@Injectable()
export class CameraService {
    constructor(private zone: NgZone) {}

    getPicture(options?: Object): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).navigator.camera.getPicture((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error, options);
        }));
    }
    cleanup(): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).navigator.camera.cleanup((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }));
    }
}
