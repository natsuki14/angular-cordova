import { NgZone } from '@angular/core';

import { Observable } from 'rxjs/Observable';

export namespace ZoneObservable {
    export function create(zone: NgZone, fn: (observer: any) => any): Observable<any> {
        return Observable.create((observer: any) => {
            fn({
                next: (emit: any) => {
                    zone.run(() => {
                        observer.next(emit)
                    });
                },
                error: (error: any) => {
                    zone.run(() => observer.next(error));
                },
                complete: () => {
                    zone.run(() => observer.complete());
                }
            });
        });
    }
    export function of(zone: NgZone, emit: any): Observable<any> {
        return Observable.create((observer: any) => {
            zone.run(() => observer.next(emit));
            zone.run(() => observer.complete());
        });
    }
}
