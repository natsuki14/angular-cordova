// cordova-plugin-firebase
import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

import { Cordova, ZoneObservable } from '../../cordova';

@Injectable()
export class FirebaseService {
    constructor(private zone: NgZone) {}

    getInstanceId(): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.getInstanceId((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }));
    }
    grantPermission(): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.grantPermission((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }));
    }
    setBadgeNumber(number: number): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.setBadgeNumber(number, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }));
    }
    getBadgeNumber(): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.getBadgeNumber((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }));
    }
    subscribe(topic: string): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.subscribe(topic, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }));
    }
    unsubscribe(topic: string): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.unsubscribe(topic, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }));
    }
    logEvent(name: string, params: Object): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.logEvent(name, params, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }));
    }
    fetch(): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.fetch((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }));
    }
    activateFetched(): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.activateFetched((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }));
    }
    getValue(key: string): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.getValue(key, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }));
    }
    getByteArray(key: string): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.getByteArray(key, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }));
    }
    getInfo(): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.getInfo((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }));
    }
    setConfigSettings(settings: Object): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.setConfigSettings(settings, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }));
    }
    setDefaults(defaults: Object, namespace?: string): Observable<any> {
        return Cordova.deviceready.mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.setDefaults(defaults, namespace, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }));
    }
}
