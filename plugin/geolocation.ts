// cordova-plugin-geolocation
import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

import { Cordova, ZoneObservable } from '../';

export class PositionError {
    public static get PERMISSION_DENIED(): number { return 1; }
    public static get POSITION_UNAVAILABLE(): number { return 2; }
    public static get TIMEOUT(): number { return 3; }
}

@Injectable()
export class GeolocationService {
    constructor(private zone: NgZone) {}

    getCurrentPosition(): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).navigator.geolocation.getCurrentPosition((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }));
    }
    watchPosition(options?: Object): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            let watchID = (<any>window).navigator.geolocation.watchPosition((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error, options);
            return () => {
                (<any>window).navigator.geolocation.clearWatch(watchID);
            };
        }));
    }
}
