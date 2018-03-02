//cordova-plugin-network-information
import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

import { Cordova, ZoneObservable } from '../';

export class Connection {
  public static get UNKNOWN(): string {
    return 'unknown';
  }
  public static get ETHERNET(): string {
    return 'ethernet';
  }
  public static get WIFI(): string {
    return 'wifi';
  }
  public static get CELL_2G(): string {
    return '2g';
  }
  public static get CELL_3G(): string {
    return '3g';
  }
  public static get CELL_4G(): string {
    return '4g';
  }
  public static get NONE(): string {
    return 'none';
  }
  public static get CELL(): string {
    return 'celluar';
  }
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
