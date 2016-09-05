import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';

export namespace Cordova {
    export const platformId: string = (<any>window).cordova.platformId;
    export const deviceready: Observable<any> = Observable.create((observer: any) => {
        let fn = () => {
            observer.next(null);
            observer.complete();
        }
        (<any>document).addEventListener('deviceready', fn, false);
        return () => {
            (<any>document).removeEventListener('deviceready', fn, false);
        };
    }).share();

    deviceready.subscribe();
}
