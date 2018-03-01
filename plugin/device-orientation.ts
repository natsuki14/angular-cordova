// cordova-plugin-device-orientation
import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

import { Cordova, ZoneObservable } from '../';

export class CompassError {
    public static get COMPASS_INTERNAL_ERR(): number { return 0; }
    public static get COMPASS_NOT_SUPPORTED(): number { return 20; }
}

@Injectable()
export class DeviceOrientationService {
    constructor(private zone: NgZone) {}

    getCurrentHeading(): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).navigator.compass.getCurrentHeading((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }));
    }
    watchHeading(options?: Object): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            let watchID = (<any>window).navigator.compass.watchHeading((res: any) => {
                observer.next(res);
            }, observer.error, options);
            return () => {
                (<any>window).navigator.compass.clearWatch(watchID);
            };
        }));
    }
}
