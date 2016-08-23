// https://github.com/arnesson/cordova-plugin-firebase
import { CordovaService } from '../../cordova.service';

export class CordovaFirebaseService extends CordovaService {
    getInstanceId(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).FirebasePlugin.getInstanceId(resolve, reject);
            });
        });
    }
    grantPermission(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).FirebasePlugin.grantPermission(resolve, reject);
            });
        });
    }
    setBadgeNumber(number: number): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).FirebasePlugin.setBadgeNumber(number, resolve, reject);
            });
        });
    }
    getBadgeNumber(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).FirebasePlugin.getBadgeNumber(resolve, reject);
            });
        });
    }
    subscribe(topic: string): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).FirebasePlugin.subscribe(topic, resolve, reject);
            });
        });
    }
    unsubscribe(topic: string): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).FirebasePlugin.unsubscribe(topic, resolve, reject);
            });
        });
    }
    logEvent(name: string, params: Object): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).FirebasePlugin.logEvent(name, params, resolve, reject);
            });
        });
    }
    fetch(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).FirebasePlugin.fetch(resolve, reject);
            });
        });
    }
    activateFetched(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).FirebasePlugin.activateFetched(resolve, reject);
            });
        });
    }
    getValue(key: string): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).FirebasePlugin.getValue(key, resolve, reject);
            });
        });
    }
    getByteArray(key: string): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).FirebasePlugin.getByteArray(key, resolve, reject);
            });
        });
    }
    getInfo(): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).FirebasePlugin.getInfo(resolve, reject);
            });
        });
    }
    setConfigSettings(settings: Object): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).FirebasePlugin.setConfigSettings(settings, resolve, reject);
            });
        });
    }
    setDefaults(defaults: Object, namespace?: string): Promise<any> {
        return this.deviceready().then((): Promise<any> => {
            return new Promise<any>((resolve, reject): void => {
                (<any>window).FirebasePlugin.setDefaults(defaults, namespace, resolve, reject);
            });
        });
    }
}
