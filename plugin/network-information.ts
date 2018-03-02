//cordova-plugin-network-information
import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

import { Cordova, ZoneObservable } from '../';

export class Connection {
  public static UNKNOWN = 'unknown';
  public static ETHERNET = 'ethernet';
  public static WIFI = 'wifi';
  public static CELL_2G = '2g';
  public static CELL_3G = '3g';
  public static CELL_4G = '4g';
  public static NONE = 'none';
  public static CELL = 'celluar';
}

@Injectable()
export class NetworkInformationService {
  constructor(private zone: NgZone) {}

  online(): Observable<any> {
    return Cordova.deviceready.mergeMap(() =>
      ZoneObservable.create(this.zone, (observer: any) => {
        document.addEventListener('online', observer.next, false);
        return () => {
          document.removeEventListener('online', observer.next, false);
        };
      })
    );
  }

  offline(): Observable<any> {
    return Cordova.deviceready.mergeMap(() =>
      ZoneObservable.create(this.zone, (observer: any) => {
        document.addEventListener('offline', observer.next, false);
        return () => {
          document.removeEventListener('offline', observer.next, false);
        };
      })
    );
  }

  connectionType(): Observable<any> {
    return Cordova.deviceready.mergeMap(() =>
      ZoneObservable.of(this.zone, (<any>window).navigator.connection.type)
    );
  }
}
